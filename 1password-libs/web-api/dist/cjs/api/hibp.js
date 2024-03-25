"use strict";
var __awaiter = this && this.__awaiter || function(t, e, o, r) {
        return new(o || (o = Promise))(function(n, i) {
            function p(t) {
                try {
                    u(r.next(t))
                } catch (t) {
                    i(t)
                }
            }

            function a(t) {
                try {
                    u(r.throw(t))
                } catch (t) {
                    i(t)
                }
            }

            function u(t) {
                var e;
                t.done ? n(t.value) : (e = t.value, e instanceof o ? e : new o(function(t) {
                    t(e)
                })).then(p, a)
            }
            u((r = r.apply(t, e || [])).next())
        })
    },
    __generator = this && this.__generator || function(t, e) {
        var o, r, n, i, p = {
            label: 0,
            sent: function() {
                if (1 & n[0]) throw n[1];
                return n[1]
            },
            trys: [],
            ops: []
        };
        return i = {
            next: a(0),
            throw: a(1),
            return: a(2)
        }, "function" == typeof Symbol && (i[Symbol.iterator] = function() {
            return this
        }), i;

        function a(i) {
            return function(a) {
                return function(i) {
                    if (o) throw new TypeError("Generator is already executing.");
                    for (; p;) try {
                        if (o = 1, r && (n = 2 & i[0] ? r.return : i[0] ? r.throw || ((n = r.return) && n.call(r), 0) : r.next) && !(n = n.call(r, i[1])).done) return n;
                        switch (r = 0, n && (i = [2 & i[0], n.value]), i[0]) {
                            case 0:
                            case 1:
                                n = i;
                                break;
                            case 4:
                                return p.label++, {
                                    value: i[1],
                                    done: !1
                                };
                            case 5:
                                p.label++, r = i[1], i = [0];
                                continue;
                            case 7:
                                i = p.ops.pop(), p.trys.pop();
                                continue;
                            default:
                                if (!(n = (n = p.trys).length > 0 && n[n.length - 1]) && (6 === i[0] || 2 === i[0])) {
                                    p = 0;
                                    continue
                                }
                                if (3 === i[0] && (!n || i[1] > n[0] && i[1] < n[3])) {
                                    p.label = i[1];
                                    break
                                }
                                if (6 === i[0] && p.label < n[1]) {
                                    p.label = n[1], n = i;
                                    break
                                }
                                if (n && p.label < n[2]) {
                                    p.label = n[2], p.ops.push(i);
                                    break
                                }
                                n[2] && p.ops.pop(), p.trys.pop();
                                continue
                        }
                        i = e.call(t, p)
                    } catch (t) {
                        i = [6, t], r = 0
                    } finally {
                        o = n = 0
                    }
                    if (5 & i[0]) throw i[1];
                    return {
                        value: i[0] ? i[1] : void 0,
                        done: !0
                    }
                }([i, a])
            }
        }
    };
Object.defineProperty(exports, "__esModule", {
    value: !0
}), exports.postHibpDomainReportNotify = exports.getHibpDomainReportCSV = exports.getHibpDomainReport = exports.getHibpReport = void 0;
var getHibpReport = function(t) {
    return t.get("/api/v1/report/hibp", void 0, {
        timeout: 6e4
    })
};
exports.getHibpReport = getHibpReport;
var getHibpDomainReport = function(t) {
    return t.get("/api/v1/report/hibp/domain", void 0, {
        timeout: 6e4
    })
};
exports.getHibpDomainReport = getHibpDomainReport;
var getHibpDomainReportCSV = function(t) {
    return t.get("/api/v1/report/hibp/domain/csv", void 0, {
        timeout: 6e4
    })
};
exports.getHibpDomainReportCSV = getHibpDomainReportCSV;
var postHibpDomainReportNotify = function(t, e) {
    return __awaiter(void 0, void 0, void 0, function() {
        return __generator(this, function(o) {
            switch (o.label) {
                case 0:
                    return [4, t.post("/api/v1/report/hibp/domain/notify", e)];
                case 1:
                    return o.sent(), [2]
            }
        })
    })
};
exports.postHibpDomainReportNotify = postHibpDomainReportNotify;