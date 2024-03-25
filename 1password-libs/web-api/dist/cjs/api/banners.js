"use strict";
var __createBinding = this && this.__createBinding || (Object.create ? function(e, t, n, r) {
        void 0 === r && (r = n), Object.defineProperty(e, r, {
            enumerable: !0,
            get: function() {
                return t[n]
            }
        })
    } : function(e, t, n, r) {
        void 0 === r && (r = n), e[r] = t[n]
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
            for (var n in e) "default" !== n && Object.prototype.hasOwnProperty.call(e, n) && __createBinding(t, e, n);
        return __setModuleDefault(t, e), t
    },
    __awaiter = this && this.__awaiter || function(e, t, n, r) {
        return new(n || (n = Promise))(function(o, a) {
            function i(e) {
                try {
                    u(r.next(e))
                } catch (e) {
                    a(e)
                }
            }

            function s(e) {
                try {
                    u(r.throw(e))
                } catch (e) {
                    a(e)
                }
            }

            function u(e) {
                var t;
                e.done ? o(e.value) : (t = e.value, t instanceof n ? t : new n(function(e) {
                    e(t)
                })).then(i, s)
            }
            u((r = r.apply(e, t || [])).next())
        })
    },
    __generator = this && this.__generator || function(e, t) {
        var n, r, o, a, i = {
            label: 0,
            sent: function() {
                if (1 & o[0]) throw o[1];
                return o[1]
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
                    if (n) throw new TypeError("Generator is already executing.");
                    for (; i;) try {
                        if (n = 1, r && (o = 2 & a[0] ? r.return : a[0] ? r.throw || ((o = r.return) && o.call(r), 0) : r.next) && !(o = o.call(r, a[1])).done) return o;
                        switch (r = 0, o && (a = [2 & a[0], o.value]), a[0]) {
                            case 0:
                            case 1:
                                o = a;
                                break;
                            case 4:
                                return i.label++, {
                                    value: a[1],
                                    done: !1
                                };
                            case 5:
                                i.label++, r = a[1], a = [0];
                                continue;
                            case 7:
                                a = i.ops.pop(), i.trys.pop();
                                continue;
                            default:
                                if (!(o = (o = i.trys).length > 0 && o[o.length - 1]) && (6 === a[0] || 2 === a[0])) {
                                    i = 0;
                                    continue
                                }
                                if (3 === a[0] && (!o || a[1] > o[0] && a[1] < o[3])) {
                                    i.label = a[1];
                                    break
                                }
                                if (6 === a[0] && i.label < o[1]) {
                                    i.label = o[1], o = a;
                                    break
                                }
                                if (o && i.label < o[2]) {
                                    i.label = o[2], i.ops.push(a);
                                    break
                                }
                                o[2] && i.ops.pop(), i.trys.pop();
                                continue
                        }
                        a = t.call(e, i)
                    } catch (e) {
                        a = [6, e], r = 0
                    } finally {
                        n = o = 0
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
Object.defineProperty(exports, "__esModule", {
    value: !0
}), exports.performBannerAction = exports.getBannersForSession = exports.BannerInstances = exports.BannerGroupTimeouts = exports.BannerInstance = void 0;
var t = __importStar(require("io-ts")),
    util_1 = require("../util");
exports.BannerInstance = t.readonly(t.type({
    uuid: t.string,
    banner: t.string,
    group: t.number
})), exports.BannerGroupTimeouts = t.readonly(t.array(t.type({
    group: t.number,
    until: t.string
}))), exports.BannerInstances = t.readonly(t.partial({
    instances: t.union([t.array(exports.BannerInstance), t.null]),
    snooze: exports.BannerGroupTimeouts
}));
var getBannersForSession = function(e, t) {
    return __awaiter(void 0, void 0, void 0, function() {
        return __generator(this, function(n) {
            return [2, e.get("/api/v2/banner/instances?groups=" + t).then(util_1.unsafeDecodeAs(exports.BannerInstances))]
        })
    })
};
exports.getBannersForSession = getBannersForSession;
var performBannerAction = function(e, t, n) {
    return __awaiter(void 0, void 0, void 0, function() {
        var r, o, a;
        return __generator(this, function(i) {
            switch (i.label) {
                case 0:
                    return r = {
                        status: n
                    }, [4, e.post("/api/v2/banner/instance/" + t + "/status", r)];
                case 1:
                    return o = i.sent(), o = util_1.unsafeDecodeAs(exports.BannerInstances)(o), [2, null !== (a = o.snooze) && void 0 !== a ? a : []]
            }
        })
    })
};
exports.performBannerAction = performBannerAction;