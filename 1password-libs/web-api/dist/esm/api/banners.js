var __awaiter = this && this.__awaiter || function(n, t, e, r) {
        return new(e || (e = Promise))(function(a, o) {
            function i(n) {
                try {
                    s(r.next(n))
                } catch (n) {
                    o(n)
                }
            }

            function u(n) {
                try {
                    s(r.throw(n))
                } catch (n) {
                    o(n)
                }
            }

            function s(n) {
                var t;
                n.done ? a(n.value) : (t = n.value, t instanceof e ? t : new e(function(n) {
                    n(t)
                })).then(i, u)
            }
            s((r = r.apply(n, t || [])).next())
        })
    },
    __generator = this && this.__generator || function(n, t) {
        var e, r, a, o, i = {
            label: 0,
            sent: function() {
                if (1 & a[0]) throw a[1];
                return a[1]
            },
            trys: [],
            ops: []
        };
        return o = {
            next: u(0),
            throw: u(1),
            return: u(2)
        }, "function" == typeof Symbol && (o[Symbol.iterator] = function() {
            return this
        }), o;

        function u(o) {
            return function(u) {
                return function(o) {
                    if (e) throw new TypeError("Generator is already executing.");
                    for (; i;) try {
                        if (e = 1, r && (a = 2 & o[0] ? r.return : o[0] ? r.throw || ((a = r.return) && a.call(r), 0) : r.next) && !(a = a.call(r, o[1])).done) return a;
                        switch (r = 0, a && (o = [2 & o[0], a.value]), o[0]) {
                            case 0:
                            case 1:
                                a = o;
                                break;
                            case 4:
                                return i.label++, {
                                    value: o[1],
                                    done: !1
                                };
                            case 5:
                                i.label++, r = o[1], o = [0];
                                continue;
                            case 7:
                                o = i.ops.pop(), i.trys.pop();
                                continue;
                            default:
                                if (!(a = (a = i.trys).length > 0 && a[a.length - 1]) && (6 === o[0] || 2 === o[0])) {
                                    i = 0;
                                    continue
                                }
                                if (3 === o[0] && (!a || o[1] > a[0] && o[1] < a[3])) {
                                    i.label = o[1];
                                    break
                                }
                                if (6 === o[0] && i.label < a[1]) {
                                    i.label = a[1], a = o;
                                    break
                                }
                                if (a && i.label < a[2]) {
                                    i.label = a[2], i.ops.push(o);
                                    break
                                }
                                a[2] && i.ops.pop(), i.trys.pop();
                                continue
                        }
                        o = t.call(n, i)
                    } catch (n) {
                        o = [6, n], r = 0
                    } finally {
                        e = a = 0
                    }
                    if (5 & o[0]) throw o[1];
                    return {
                        value: o[0] ? o[1] : void 0,
                        done: !0
                    }
                }([o, u])
            }
        }
    };
import * as t from "io-ts";
import {
    unsafeDecodeAs
} from "../util";
export var BannerInstance = t.readonly(t.type({
    uuid: t.string,
    banner: t.string,
    group: t.number
}));
export var BannerGroupTimeouts = t.readonly(t.array(t.type({
    group: t.number,
    until: t.string
})));
export var BannerInstances = t.readonly(t.partial({
    instances: t.union([t.array(BannerInstance), t.null]),
    snooze: BannerGroupTimeouts
}));
export var getBannersForSession = function(n, t) {
    return __awaiter(void 0, void 0, void 0, function() {
        return __generator(this, function(e) {
            return [2, n.get("/api/v2/banner/instances?groups=" + t).then(unsafeDecodeAs(BannerInstances))]
        })
    })
};
export var performBannerAction = function(n, t, e) {
    return __awaiter(void 0, void 0, void 0, function() {
        var r, a, o;
        return __generator(this, function(i) {
            switch (i.label) {
                case 0:
                    return r = {
                        status: e
                    }, [4, n.post("/api/v2/banner/instance/" + t + "/status", r)];
                case 1:
                    return a = i.sent(), a = unsafeDecodeAs(BannerInstances)(a), [2, null !== (o = a.snooze) && void 0 !== o ? o : []]
            }
        })
    })
};