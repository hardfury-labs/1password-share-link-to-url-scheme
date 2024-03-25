var __awaiter = this && this.__awaiter || function(e, r, t, o) {
        return new(t || (t = Promise))(function(n, a) {
            function i(e) {
                try {
                    u(o.next(e))
                } catch (e) {
                    a(e)
                }
            }

            function s(e) {
                try {
                    u(o.throw(e))
                } catch (e) {
                    a(e)
                }
            }

            function u(e) {
                var r;
                e.done ? n(e.value) : (r = e.value, r instanceof t ? r : new t(function(e) {
                    e(r)
                })).then(i, s)
            }
            u((o = o.apply(e, r || [])).next())
        })
    },
    __generator = this && this.__generator || function(e, r) {
        var t, o, n, a, i = {
            label: 0,
            sent: function() {
                if (1 & n[0]) throw n[1];
                return n[1]
            },
            trys: [],
            ops: []
        };
        return a = {
            next: s(0),
            throw: s(1),
            return: s(2)
        }, "function" == typeof Symbol && (a[Symbol.iterator] = function() {
            return this
        }), a;

        function s(a) {
            return function(s) {
                return function(a) {
                    if (t) throw new TypeError("Generator is already executing.");
                    for (; i;) try {
                        if (t = 1, o && (n = 2 & a[0] ? o.return : a[0] ? o.throw || ((n = o.return) && n.call(o), 0) : o.next) && !(n = n.call(o, a[1])).done) return n;
                        switch (o = 0, n && (a = [2 & a[0], n.value]), a[0]) {
                            case 0:
                            case 1:
                                n = a;
                                break;
                            case 4:
                                return i.label++, {
                                    value: a[1],
                                    done: !1
                                };
                            case 5:
                                i.label++, o = a[1], a = [0];
                                continue;
                            case 7:
                                a = i.ops.pop(), i.trys.pop();
                                continue;
                            default:
                                if (!(n = (n = i.trys).length > 0 && n[n.length - 1]) && (6 === a[0] || 2 === a[0])) {
                                    i = 0;
                                    continue
                                }
                                if (3 === a[0] && (!n || a[1] > n[0] && a[1] < n[3])) {
                                    i.label = a[1];
                                    break
                                }
                                if (6 === a[0] && i.label < n[1]) {
                                    i.label = n[1], n = a;
                                    break
                                }
                                if (n && i.label < n[2]) {
                                    i.label = n[2], i.ops.push(a);
                                    break
                                }
                                n[2] && i.ops.pop(), i.trys.pop();
                                continue
                        }
                        a = r.call(e, i)
                    } catch (e) {
                        a = [6, e], o = 0
                    } finally {
                        t = n = 0
                    }
                    if (5 & a[0]) throw a[1];
                    return {
                        value: a[0] ? a[1] : void 0,
                        done: !0
                    }
                }([a, s])
            }
        }
    };
import * as api from "../api";
import * as parser from "../parser";
import {
    errorHandler as eh
} from "../util/error_handler";
import {
    debouncePromise
} from "../util/make_promise";
import {
    findCachedUser
} from "./user";
var codeLocation = "action/report",
    errorHandler = eh(codeLocation);
export var getDashboardReport = function(e) {
    return Promise.resolve().then(function() {
        return api.getDashboardReport(e.session)
    }).catch(errorHandler("getDashboardReport"))
};
export var getUserReport = function(e, r) {
    return Promise.resolve().then(function() {
        return api.getUserReport(e.session, r, ["overview", "itemusage"])
    }).then(function(t) {
        return parser.userReportFromAPI(e, t, findCachedUser(e, r))
    }).catch(errorHandler("getUserReport"))
};
export var getUsageReportsWithFilters = function(e, r, t) {
    return __awaiter(void 0, void 0, void 0, function() {
        var o, n, a;
        return __generator(this, function(i) {
            switch (i.label) {
                case 0:
                    if (!api.isValidReportParams(r)) throw new Error("report params are invalid");
                    i.label = 1;
                case 1:
                    return i.trys.push([1, 4, , 5]), [4, api.getItemReportWithFilters(e.session, r, t)];
                case 2:
                    return o = i.sent(), [4, parser.reportSectionItemUsageFromApi(e, o)];
                case 3:
                    return n = i.sent(), [2, {
                        apiReportItem: o,
                        itemUsages: n
                    }];
                case 4:
                    return a = i.sent(), [2, errorHandler("getUsageReportsWithFilters", a)];
                case 5:
                    return [2]
            }
        })
    })
};
export var getUsageReportsWithCursors = function(e, r, t) {
    return __awaiter(void 0, void 0, void 0, function() {
        var o, n, a;
        return __generator(this, function(i) {
            switch (i.label) {
                case 0:
                    if (!api.isValidReportParams(r)) throw new Error("report params are invalid");
                    i.label = 1;
                case 1:
                    return i.trys.push([1, 4, , 5]), [4, api.getItemReportWithCursors(e.session, r, t)];
                case 2:
                    return o = i.sent(), [4, parser.reportSectionItemUsageFromApi(e, o)];
                case 3:
                    return n = i.sent(), [2, {
                        apiReportItem: o,
                        itemUsages: n
                    }];
                case 4:
                    return a = i.sent(), [2, errorHandler("getUsageReportsWithCursors", a)];
                case 5:
                    return [2]
            }
        })
    })
};
export var getVaultReport = function(e, r) {
    return Promise.resolve().then(function() {
        return api.getVaultReport(e.session, r, ["overview", "itemusage"])
    }).then(function(r) {
        return parser.vaultReportFromAPI(e, r)
    }).catch(errorHandler("getVaultReport"))
};
export var getVaultsReport = function(e, r, t) {
    return __awaiter(void 0, void 0, void 0, function() {
        var o, n;
        return __generator(this, function(a) {
            switch (a.label) {
                case 0:
                    return a.trys.push([0, 2, , 3]), [4, api.getVaultsReport(e.session, r, t)];
                case 1:
                    return o = a.sent(), [2, parser.vaultsReportFromAPI(e, o)];
                case 2:
                    return n = a.sent(), [2, errorHandler("getVaultsReport", n)];
                case 3:
                    return [2]
            }
        })
    })
};
export var getAccountReport = function(e, r) {
    return __awaiter(void 0, void 0, void 0, function() {
        return __generator(this, function(t) {
            return 0 === r.length ? [2, {}] : [2, api.getAccountReport(e.session, r)]
        })
    })
};
export var getOverviewReport = function(e) {
    return api.getOverviewReport(e.session, ["extended"]).catch(errorHandler("getOverviewReport"))
};
export var getOldDevicesReport = function(e) {
    return api.getOldDevicesReport(e.session)
};
export var getAccountReportCSV = function(e) {
    return debouncePromise([codeLocation, "getAccountReportCSV", e.id], function() {
        return __awaiter(void 0, void 0, void 0, function() {
            return __generator(this, function(r) {
                return [2, api.getAccountReportCSV(e.session)]
            })
        })
    })
};