"use strict";
var __createBinding = this && this.__createBinding || (Object.create ? function(e, r, t, o) {
        void 0 === o && (o = t), Object.defineProperty(e, o, {
            enumerable: !0,
            get: function() {
                return r[t]
            }
        })
    } : function(e, r, t, o) {
        void 0 === o && (o = t), e[o] = r[t]
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
    __awaiter = this && this.__awaiter || function(e, r, t, o) {
        return new(t || (t = Promise))(function(n, s) {
            function i(e) {
                try {
                    u(o.next(e))
                } catch (e) {
                    s(e)
                }
            }

            function a(e) {
                try {
                    u(o.throw(e))
                } catch (e) {
                    s(e)
                }
            }

            function u(e) {
                var r;
                e.done ? n(e.value) : (r = e.value, r instanceof t ? r : new t(function(e) {
                    e(r)
                })).then(i, a)
            }
            u((o = o.apply(e, r || [])).next())
        })
    },
    __generator = this && this.__generator || function(e, r) {
        var t, o, n, s, i = {
            label: 0,
            sent: function() {
                if (1 & n[0]) throw n[1];
                return n[1]
            },
            trys: [],
            ops: []
        };
        return s = {
            next: a(0),
            throw: a(1),
            return: a(2)
        }, "function" == typeof Symbol && (s[Symbol.iterator] = function() {
            return this
        }), s;

        function a(s) {
            return function(a) {
                return function(s) {
                    if (t) throw new TypeError("Generator is already executing.");
                    for (; i;) try {
                        if (t = 1, o && (n = 2 & s[0] ? o.return : s[0] ? o.throw || ((n = o.return) && n.call(o), 0) : o.next) && !(n = n.call(o, s[1])).done) return n;
                        switch (o = 0, n && (s = [2 & s[0], n.value]), s[0]) {
                            case 0:
                            case 1:
                                n = s;
                                break;
                            case 4:
                                return i.label++, {
                                    value: s[1],
                                    done: !1
                                };
                            case 5:
                                i.label++, o = s[1], s = [0];
                                continue;
                            case 7:
                                s = i.ops.pop(), i.trys.pop();
                                continue;
                            default:
                                if (!(n = (n = i.trys).length > 0 && n[n.length - 1]) && (6 === s[0] || 2 === s[0])) {
                                    i = 0;
                                    continue
                                }
                                if (3 === s[0] && (!n || s[1] > n[0] && s[1] < n[3])) {
                                    i.label = s[1];
                                    break
                                }
                                if (6 === s[0] && i.label < n[1]) {
                                    i.label = n[1], n = s;
                                    break
                                }
                                if (n && i.label < n[2]) {
                                    i.label = n[2], i.ops.push(s);
                                    break
                                }
                                n[2] && i.ops.pop(), i.trys.pop();
                                continue
                        }
                        s = r.call(e, i)
                    } catch (e) {
                        s = [6, e], o = 0
                    } finally {
                        t = n = 0
                    }
                    if (5 & s[0]) throw s[1];
                    return {
                        value: s[0] ? s[1] : void 0,
                        done: !0
                    }
                }([s, a])
            }
        }
    };
Object.defineProperty(exports, "__esModule", {
    value: !0
}), exports.getAccountReportCSV = exports.getOldDevicesReport = exports.getOverviewReport = exports.getAccountReport = exports.getVaultsReport = exports.getVaultReport = exports.getUsageReportsWithCursors = exports.getUsageReportsWithFilters = exports.getUserReport = exports.getDashboardReport = void 0;
var api = __importStar(require("../api")),
    parser = __importStar(require("../parser")),
    error_handler_1 = require("../util/error_handler"),
    make_promise_1 = require("../util/make_promise"),
    user_1 = require("./user"),
    codeLocation = "action/report",
    errorHandler = error_handler_1.errorHandler(codeLocation),
    getDashboardReport = function(e) {
        return Promise.resolve().then(function() {
            return api.getDashboardReport(e.session)
        }).catch(errorHandler("getDashboardReport"))
    };
exports.getDashboardReport = getDashboardReport;
var getUserReport = function(e, r) {
    return Promise.resolve().then(function() {
        return api.getUserReport(e.session, r, ["overview", "itemusage"])
    }).then(function(t) {
        return parser.userReportFromAPI(e, t, user_1.findCachedUser(e, r))
    }).catch(errorHandler("getUserReport"))
};
exports.getUserReport = getUserReport;
var getUsageReportsWithFilters = function(e, r, t) {
    return __awaiter(void 0, void 0, void 0, function() {
        var o, n, s;
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
                    return s = i.sent(), [2, errorHandler("getUsageReportsWithFilters", s)];
                case 5:
                    return [2]
            }
        })
    })
};
exports.getUsageReportsWithFilters = getUsageReportsWithFilters;
var getUsageReportsWithCursors = function(e, r, t) {
    return __awaiter(void 0, void 0, void 0, function() {
        var o, n, s;
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
                    return s = i.sent(), [2, errorHandler("getUsageReportsWithCursors", s)];
                case 5:
                    return [2]
            }
        })
    })
};
exports.getUsageReportsWithCursors = getUsageReportsWithCursors;
var getVaultReport = function(e, r) {
    return Promise.resolve().then(function() {
        return api.getVaultReport(e.session, r, ["overview", "itemusage"])
    }).then(function(r) {
        return parser.vaultReportFromAPI(e, r)
    }).catch(errorHandler("getVaultReport"))
};
exports.getVaultReport = getVaultReport;
var getVaultsReport = function(e, r, t) {
    return __awaiter(void 0, void 0, void 0, function() {
        var o, n;
        return __generator(this, function(s) {
            switch (s.label) {
                case 0:
                    return s.trys.push([0, 2, , 3]), [4, api.getVaultsReport(e.session, r, t)];
                case 1:
                    return o = s.sent(), [2, parser.vaultsReportFromAPI(e, o)];
                case 2:
                    return n = s.sent(), [2, errorHandler("getVaultsReport", n)];
                case 3:
                    return [2]
            }
        })
    })
};
exports.getVaultsReport = getVaultsReport;
var getAccountReport = function(e, r) {
    return __awaiter(void 0, void 0, void 0, function() {
        return __generator(this, function(t) {
            return 0 === r.length ? [2, {}] : [2, api.getAccountReport(e.session, r)]
        })
    })
};
exports.getAccountReport = getAccountReport;
var getOverviewReport = function(e) {
    return api.getOverviewReport(e.session, ["extended"]).catch(errorHandler("getOverviewReport"))
};
exports.getOverviewReport = getOverviewReport;
var getOldDevicesReport = function(e) {
    return api.getOldDevicesReport(e.session)
};
exports.getOldDevicesReport = getOldDevicesReport;
var getAccountReportCSV = function(e) {
    return make_promise_1.debouncePromise([codeLocation, "getAccountReportCSV", e.id], function() {
        return __awaiter(void 0, void 0, void 0, function() {
            return __generator(this, function(r) {
                return [2, api.getAccountReportCSV(e.session)]
            })
        })
    })
};
exports.getAccountReportCSV = getAccountReportCSV;