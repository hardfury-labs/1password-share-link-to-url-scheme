var __awaiter = this && this.__awaiter || function(r, e, t, o) {
        return new(t || (t = Promise))(function(a, n) {
            function i(r) {
                try {
                    l(o.next(r))
                } catch (r) {
                    n(r)
                }
            }

            function s(r) {
                try {
                    l(o.throw(r))
                } catch (r) {
                    n(r)
                }
            }

            function l(r) {
                var e;
                r.done ? a(r.value) : (e = r.value, e instanceof t ? e : new t(function(r) {
                    r(e)
                })).then(i, s)
            }
            l((o = o.apply(r, e || [])).next())
        })
    },
    __generator = this && this.__generator || function(r, e) {
        var t, o, a, n, i = {
            label: 0,
            sent: function() {
                if (1 & a[0]) throw a[1];
                return a[1]
            },
            trys: [],
            ops: []
        };
        return n = {
            next: s(0),
            throw: s(1),
            return: s(2)
        }, "function" == typeof Symbol && (n[Symbol.iterator] = function() {
            return this
        }), n;

        function s(n) {
            return function(s) {
                return function(n) {
                    if (t) throw new TypeError("Generator is already executing.");
                    for (; i;) try {
                        if (t = 1, o && (a = 2 & n[0] ? o.return : n[0] ? o.throw || ((a = o.return) && a.call(o), 0) : o.next) && !(a = a.call(o, n[1])).done) return a;
                        switch (o = 0, a && (n = [2 & n[0], a.value]), n[0]) {
                            case 0:
                            case 1:
                                a = n;
                                break;
                            case 4:
                                return i.label++, {
                                    value: n[1],
                                    done: !1
                                };
                            case 5:
                                i.label++, o = n[1], n = [0];
                                continue;
                            case 7:
                                n = i.ops.pop(), i.trys.pop();
                                continue;
                            default:
                                if (!(a = (a = i.trys).length > 0 && a[a.length - 1]) && (6 === n[0] || 2 === n[0])) {
                                    i = 0;
                                    continue
                                }
                                if (3 === n[0] && (!a || n[1] > a[0] && n[1] < a[3])) {
                                    i.label = n[1];
                                    break
                                }
                                if (6 === n[0] && i.label < a[1]) {
                                    i.label = a[1], a = n;
                                    break
                                }
                                if (a && i.label < a[2]) {
                                    i.label = a[2], i.ops.push(n);
                                    break
                                }
                                a[2] && i.ops.pop(), i.trys.pop();
                                continue
                        }
                        n = e.call(r, i)
                    } catch (r) {
                        n = [6, r], o = 0
                    } finally {
                        t = a = 0
                    }
                    if (5 & n[0]) throw n[1];
                    return {
                        value: n[0] ? n[1] : void 0,
                        done: !0
                    }
                }([n, s])
            }
        }
    },
    __values = this && this.__values || function(r) {
        var e = "function" == typeof Symbol && Symbol.iterator,
            t = e && r[e],
            o = 0;
        if (t) return t.call(r);
        if (r && "number" == typeof r.length) return {
            next: function() {
                return r && o >= r.length && (r = void 0), {
                    value: r && r[o++],
                    done: !r
                }
            }
        };
        throw new TypeError(e ? "Object is not iterable." : "Symbol.iterator is not defined.")
    };
import {
    VaultItem
} from "../../model";
import {
    makePromise as mp
} from "../../util/make_promise";
import {
    invalidateCache
} from "../context";
import {
    patchVaultItems
} from "../vault_item";
import {
    parseAppleExport
} from "./parsers/apple";
import {
    parseChromeExport
} from "./parsers/chrome";
import {
    parseDashlaneExport
} from "./parsers/dashlane";
import {
    parseEncryptrExport
} from "./parsers/encryptr";
import {
    parseLastPassExport
} from "./parsers/lastpass";
import {
    parseRoboFormExport
} from "./parsers/roboform";
var codeLocation = "action/import/index",
    makePromise = mp(codeLocation);
export {
    csvToVaultItems,
    CellAttr,
    BoundCellType,
    CCHeader,
    ItemKind,
    LoginHeader,
    SecureNoteHeader
}
from "./parsers/csv";
export {
    parse,
    removeEmptyColumns,
    findLongestRowLength
}
from "./parsers/helpers/parser_helpers";
export var importData = function(r, e, t, o, a) {
    return makePromise("importData", function() {
        return __awaiter(void 0, void 0, void 0, function() {
            var n;
            return __generator(this, function(i) {
                switch (i.label) {
                    case 0:
                        return [4, getParserForFormat(e)(r, t, o, a)];
                    case 1:
                        return n = i.sent(), [4, importVaultItems(r, o, n)];
                    case 2:
                        return [2, i.sent()]
                }
            })
        })
    })
};
export var importVaultItems = function(r, e, t) {
    return __awaiter(void 0, void 0, void 0, function() {
        var o, a, n, i, s, l, p;
        return __generator(this, function(u) {
            switch (u.label) {
                case 0:
                    o = [];
                    try {
                        for (a = __values(t), n = a.next(); !n.done; n = a.next()) i = n.value, isValidItem(i) && o.push(i)
                    } catch (r) {
                        l = {
                            error: r
                        }
                    } finally {
                        try {
                            n && !n.done && (p = a.return) && p.call(a)
                        } finally {
                            if (l) throw l.error
                        }
                    }
                    if (0 === o.length) throw new Error("No importable items were found in the selected file.");
                    return [4, patchVaultItems(r, o, e)];
                case 1:
                    return s = u.sent(), invalidateCache(r), [2, s.updatedItems]
            }
        })
    })
};
var getParserForFormat = function(r) {
        switch (r) {
            case "lastpass":
                return parseLastPassExport;
            case "dashlane":
                return parseDashlaneExport;
            case "roboform":
                return parseRoboFormExport;
            case "chrome":
                return parseChromeExport;
            case "encryptr":
                return parseEncryptrExport;
            case "apple":
                return parseAppleExport;
            default:
                throw new Error("Invalid import format.")
        }
    },
    isValidItem = function(r) {
        var e = JSON.stringify(r.overview);
        if (e && e.length > VaultItem.MaxOverviewSize) return !1;
        var t = JSON.stringify(r.details);
        return !(t && t.length > VaultItem.MaxDetailSize)
    };