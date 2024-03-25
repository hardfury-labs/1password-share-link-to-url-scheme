"use strict";
var __assign = this && this.__assign || function() {
        return (__assign = Object.assign || function(e) {
            for (var t, r = 1, o = arguments.length; r < o; r++)
                for (var i in t = arguments[r]) Object.prototype.hasOwnProperty.call(t, i) && (e[i] = t[i]);
            return e
        }).apply(this, arguments)
    },
    __createBinding = this && this.__createBinding || (Object.create ? function(e, t, r, o) {
        void 0 === o && (o = r), Object.defineProperty(e, o, {
            enumerable: !0,
            get: function() {
                return t[r]
            }
        })
    } : function(e, t, r, o) {
        void 0 === o && (o = r), e[o] = t[r]
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
    __awaiter = this && this.__awaiter || function(e, t, r, o) {
        return new(r || (r = Promise))(function(i, n) {
            function a(e) {
                try {
                    s(o.next(e))
                } catch (e) {
                    n(e)
                }
            }

            function p(e) {
                try {
                    s(o.throw(e))
                } catch (e) {
                    n(e)
                }
            }

            function s(e) {
                var t;
                e.done ? i(e.value) : (t = e.value, t instanceof r ? t : new r(function(e) {
                    e(t)
                })).then(a, p)
            }
            s((o = o.apply(e, t || [])).next())
        })
    },
    __generator = this && this.__generator || function(e, t) {
        var r, o, i, n, a = {
            label: 0,
            sent: function() {
                if (1 & i[0]) throw i[1];
                return i[1]
            },
            trys: [],
            ops: []
        };
        return n = {
            next: p(0),
            throw: p(1),
            return: p(2)
        }, "function" == typeof Symbol && (n[Symbol.iterator] = function() {
            return this
        }), n;

        function p(n) {
            return function(p) {
                return function(n) {
                    if (r) throw new TypeError("Generator is already executing.");
                    for (; a;) try {
                        if (r = 1, o && (i = 2 & n[0] ? o.return : n[0] ? o.throw || ((i = o.return) && i.call(o), 0) : o.next) && !(i = i.call(o, n[1])).done) return i;
                        switch (o = 0, i && (n = [2 & n[0], i.value]), n[0]) {
                            case 0:
                            case 1:
                                i = n;
                                break;
                            case 4:
                                return a.label++, {
                                    value: n[1],
                                    done: !1
                                };
                            case 5:
                                a.label++, o = n[1], n = [0];
                                continue;
                            case 7:
                                n = a.ops.pop(), a.trys.pop();
                                continue;
                            default:
                                if (!(i = (i = a.trys).length > 0 && i[i.length - 1]) && (6 === n[0] || 2 === n[0])) {
                                    a = 0;
                                    continue
                                }
                                if (3 === n[0] && (!i || n[1] > i[0] && n[1] < i[3])) {
                                    a.label = n[1];
                                    break
                                }
                                if (6 === n[0] && a.label < i[1]) {
                                    a.label = i[1], i = n;
                                    break
                                }
                                if (i && a.label < i[2]) {
                                    a.label = i[2], a.ops.push(n);
                                    break
                                }
                                i[2] && a.ops.pop(), a.trys.pop();
                                continue
                        }
                        n = t.call(e, a)
                    } catch (e) {
                        n = [6, e], o = 0
                    } finally {
                        r = i = 0
                    }
                    if (5 & n[0]) throw n[1];
                    return {
                        value: n[0] ? n[1] : void 0,
                        done: !0
                    }
                }([n, p])
            }
        }
    };
Object.defineProperty(exports, "__esModule", {
    value: !0
}), exports.loadHibpReport = exports.getHibpReport = exports.getHibpDomainReportCSV = exports.getHibpDomainReport = exports.postHibpDomainReportNotify = void 0;
var hibpReports, lodash_es_1 = require("lodash-es"),
    api = __importStar(require("../api")),
    date_1 = require("../parser/date"),
    make_promise_1 = require("../util/make_promise"),
    codeLocation = "action/hibp",
    makePromise = make_promise_1.makePromise(codeLocation),
    postHibpDomainReportNotify = function(e, t) {
        return __awaiter(void 0, void 0, void 0, function() {
            return __generator(this, function(r) {
                return [2, api.postHibpDomainReportNotify(e.session, t)]
            })
        })
    };
exports.postHibpDomainReportNotify = postHibpDomainReportNotify;
var getHibpDomainReport = function(e) {
    return __awaiter(void 0, void 0, void 0, function() {
        var t;
        return __generator(this, function(r) {
            switch (r.label) {
                case 0:
                    return [4, api.getHibpDomainReport(e.session)];
                case 1:
                    return t = r.sent(), [2, __assign(__assign({}, t), {
                        breaches: t.breaches.map(function(e) {
                            return __assign(__assign({}, e), {
                                addedDate: date_1.dateFromAPI(e.addedDate),
                                notifiedDate: date_1.dateFromAPI(e.notifiedDate)
                            })
                        }),
                        lastRunAt: date_1.dateFromAPI(t.lastRunAt)
                    })]
            }
        })
    })
};
exports.getHibpDomainReport = getHibpDomainReport;
var getHibpDomainReportCSV = function(e) {
    return __awaiter(void 0, void 0, void 0, function() {
        return __generator(this, function(t) {
            return [2, make_promise_1.debouncePromise([codeLocation, "getHibpDomainReportCSV", e.id], function() {
                return api.getHibpDomainReportCSV(e.session)
            })]
        })
    })
};
exports.getHibpDomainReportCSV = getHibpDomainReportCSV;
var getHibpReport = function() {
    return hibpReports
};
exports.getHibpReport = getHibpReport;
var loadHibpReport = function(e) {
    return makePromise("getHibpReport", function() {
        return api.getHibpReport(e.session).then(function(e) {
            var t = e.map(function(e) {
                return __assign(__assign({}, e), {
                    addedDate: date_1.dateFromAPI(e.addedDate),
                    notifiedDate: date_1.dateFromAPI(e.notifiedDate)
                })
            });
            hibpReports = lodash_es_1.keyBy(t, function(e) {
                return e.domain
            })
        })
    })
};
exports.loadHibpReport = loadHibpReport;