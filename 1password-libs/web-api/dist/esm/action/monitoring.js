var __awaiter = this && this.__awaiter || function(t, e, n, r) {
        return new(n || (n = Promise))(function(o, i) {
            function a(t) {
                try {
                    u(r.next(t))
                } catch (t) {
                    i(t)
                }
            }

            function c(t) {
                try {
                    u(r.throw(t))
                } catch (t) {
                    i(t)
                }
            }

            function u(t) {
                var e;
                t.done ? o(t.value) : (e = t.value, e instanceof n ? e : new n(function(t) {
                    t(e)
                })).then(a, c)
            }
            u((r = r.apply(t, e || [])).next())
        })
    },
    __generator = this && this.__generator || function(t, e) {
        var n, r, o, i, a = {
            label: 0,
            sent: function() {
                if (1 & o[0]) throw o[1];
                return o[1]
            },
            trys: [],
            ops: []
        };
        return i = {
            next: c(0),
            throw: c(1),
            return: c(2)
        }, "function" == typeof Symbol && (i[Symbol.iterator] = function() {
            return this
        }), i;

        function c(i) {
            return function(c) {
                return function(i) {
                    if (n) throw new TypeError("Generator is already executing.");
                    for (; a;) try {
                        if (n = 1, r && (o = 2 & i[0] ? r.return : i[0] ? r.throw || ((o = r.return) && o.call(r), 0) : r.next) && !(o = o.call(r, i[1])).done) return o;
                        switch (r = 0, o && (i = [2 & i[0], o.value]), i[0]) {
                            case 0:
                            case 1:
                                o = i;
                                break;
                            case 4:
                                return a.label++, {
                                    value: i[1],
                                    done: !1
                                };
                            case 5:
                                a.label++, r = i[1], i = [0];
                                continue;
                            case 7:
                                i = a.ops.pop(), a.trys.pop();
                                continue;
                            default:
                                if (!(o = (o = a.trys).length > 0 && o[o.length - 1]) && (6 === i[0] || 2 === i[0])) {
                                    a = 0;
                                    continue
                                }
                                if (3 === i[0] && (!o || i[1] > o[0] && i[1] < o[3])) {
                                    a.label = i[1];
                                    break
                                }
                                if (6 === i[0] && a.label < o[1]) {
                                    a.label = o[1], o = i;
                                    break
                                }
                                if (o && a.label < o[2]) {
                                    a.label = o[2], a.ops.push(i);
                                    break
                                }
                                o[2] && a.ops.pop(), a.trys.pop();
                                continue
                        }
                        i = e.call(t, a)
                    } catch (t) {
                        i = [6, t], r = 0
                    } finally {
                        n = o = 0
                    }
                    if (5 & i[0]) throw i[1];
                    return {
                        value: i[0] ? i[1] : void 0,
                        done: !0
                    }
                }([i, c])
            }
        }
    };
import * as api from "../api";
import {
    makePromise as mp
} from "../util/make_promise";
var codeLocation = "action/monitoring",
    makePromise = mp(codeLocation);
export var createMonitoringCheck = function(t, e) {
    return makePromise("createMonitoringCheck", function() {
        return __awaiter(void 0, void 0, void 0, function() {
            return __generator(this, function(n) {
                switch (n.label) {
                    case 0:
                        return [4, api.createMonitoringCheck(t.session, e)];
                    case 1:
                        return [2, n.sent()]
                }
            })
        })
    })
};
export var getMonitoringStatus = function(t) {
    return __awaiter(void 0, void 0, void 0, function() {
        return __generator(this, function(e) {
            switch (e.label) {
                case 0:
                    return [4, api.getMonitoringStatus(t.session)];
                case 1:
                    return [2, e.sent()]
            }
        })
    })
};