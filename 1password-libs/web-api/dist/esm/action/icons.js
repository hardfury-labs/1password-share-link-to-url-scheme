var __awaiter = this && this.__awaiter || function(t, n, e, r) {
        return new(e || (e = Promise))(function(o, a) {
            function i(t) {
                try {
                    c(r.next(t))
                } catch (t) {
                    a(t)
                }
            }

            function u(t) {
                try {
                    c(r.throw(t))
                } catch (t) {
                    a(t)
                }
            }

            function c(t) {
                var n;
                t.done ? o(t.value) : (n = t.value, n instanceof e ? n : new e(function(t) {
                    t(n)
                })).then(i, u)
            }
            c((r = r.apply(t, n || [])).next())
        })
    },
    __generator = this && this.__generator || function(t, n) {
        var e, r, o, a, i = {
            label: 0,
            sent: function() {
                if (1 & o[0]) throw o[1];
                return o[1]
            },
            trys: [],
            ops: []
        };
        return a = {
            next: u(0),
            throw: u(1),
            return: u(2)
        }, "function" == typeof Symbol && (a[Symbol.iterator] = function() {
            return this
        }), a;

        function u(a) {
            return function(u) {
                return function(a) {
                    if (e) throw new TypeError("Generator is already executing.");
                    for (; i;) try {
                        if (e = 1, r && (o = 2 & a[0] ? r.return : a[0] ? r.throw || ((o = r.return) && o.call(r), 0) : r.next) && !(o = o.call(r, a[1])).done) return o;
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
                        a = n.call(t, i)
                    } catch (t) {
                        a = [6, t], r = 0
                    } finally {
                        e = o = 0
                    }
                    if (5 & a[0]) throw a[1];
                    return {
                        value: a[0] ? a[1] : void 0,
                        done: !0
                    }
                }([a, u])
            }
        }
    };
import * as api from "../api";
export var getIcons = function(t, n) {
    return __awaiter(void 0, void 0, void 0, function() {
        return __generator(this, function(e) {
            return [2, api.getIcons(t.session, n)]
        })
    })
};