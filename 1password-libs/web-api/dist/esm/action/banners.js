var __awaiter = this && this.__awaiter || function(n, r, t, e) {
        return new(t || (t = Promise))(function(o, i) {
            function a(n) {
                try {
                    c(e.next(n))
                } catch (n) {
                    i(n)
                }
            }

            function u(n) {
                try {
                    c(e.throw(n))
                } catch (n) {
                    i(n)
                }
            }

            function c(n) {
                var r;
                n.done ? o(n.value) : (r = n.value, r instanceof t ? r : new t(function(n) {
                    n(r)
                })).then(a, u)
            }
            c((e = e.apply(n, r || [])).next())
        })
    },
    __generator = this && this.__generator || function(n, r) {
        var t, e, o, i, a = {
            label: 0,
            sent: function() {
                if (1 & o[0]) throw o[1];
                return o[1]
            },
            trys: [],
            ops: []
        };
        return i = {
            next: u(0),
            throw: u(1),
            return: u(2)
        }, "function" == typeof Symbol && (i[Symbol.iterator] = function() {
            return this
        }), i;

        function u(i) {
            return function(u) {
                return function(i) {
                    if (t) throw new TypeError("Generator is already executing.");
                    for (; a;) try {
                        if (t = 1, e && (o = 2 & i[0] ? e.return : i[0] ? e.throw || ((o = e.return) && o.call(e), 0) : e.next) && !(o = o.call(e, i[1])).done) return o;
                        switch (e = 0, o && (i = [2 & i[0], o.value]), i[0]) {
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
                                a.label++, e = i[1], i = [0];
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
                        i = r.call(n, a)
                    } catch (n) {
                        i = [6, n], e = 0
                    } finally {
                        t = o = 0
                    }
                    if (5 & i[0]) throw i[1];
                    return {
                        value: i[0] ? i[1] : void 0,
                        done: !0
                    }
                }([i, u])
            }
        }
    };
import * as api from "../api";
import {
    dateFromGolang
} from "../util";
export var getBanners = function(n, r) {
    return __awaiter(void 0, void 0, void 0, function() {
        return __generator(this, function(t) {
            return [2, api.getBannersForSession(n.session, r)]
        })
    })
};
export var acceptBanner = function(n, r, t) {
    return __awaiter(void 0, void 0, void 0, function() {
        var e, o;
        return __generator(this, function(i) {
            switch (i.label) {
                case 0:
                    return [4, api.performBannerAction(n.session, r, "A")];
                case 1:
                    return e = i.sent(), (o = e.find(function(n) {
                        return n.group === t
                    })) ? [2, dateFromGolang(o.until)] : [2, void 0]
            }
        })
    })
};
export var dismissBanner = function(n, r, t) {
    return __awaiter(void 0, void 0, void 0, function() {
        var e, o;
        return __generator(this, function(i) {
            switch (i.label) {
                case 0:
                    return [4, api.performBannerAction(n.session, r, "D")];
                case 1:
                    return e = i.sent(), (o = e.find(function(n) {
                        return n.group === t
                    })) ? [2, dateFromGolang(o.until)] : [2, void 0]
            }
        })
    })
};