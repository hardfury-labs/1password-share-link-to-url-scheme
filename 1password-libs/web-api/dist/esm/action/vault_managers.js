var __awaiter = this && this.__awaiter || function(t, e, n, r) {
        return new(n || (n = Promise))(function(a, o) {
            function i(t) {
                try {
                    l(r.next(t))
                } catch (t) {
                    o(t)
                }
            }

            function u(t) {
                try {
                    l(r.throw(t))
                } catch (t) {
                    o(t)
                }
            }

            function l(t) {
                var e;
                t.done ? a(t.value) : (e = t.value, e instanceof n ? e : new n(function(t) {
                    t(e)
                })).then(i, u)
            }
            l((r = r.apply(t, e || [])).next())
        })
    },
    __generator = this && this.__generator || function(t, e) {
        var n, r, a, o, i = {
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
                    if (n) throw new TypeError("Generator is already executing.");
                    for (; i;) try {
                        if (n = 1, r && (a = 2 & o[0] ? r.return : o[0] ? r.throw || ((a = r.return) && a.call(r), 0) : r.next) && !(a = a.call(r, o[1])).done) return a;
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
                        o = e.call(t, i)
                    } catch (t) {
                        o = [6, t], r = 0
                    } finally {
                        n = a = 0
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
import * as api from "../api";
export var getVaultManagers = function(t, e) {
    return __awaiter(void 0, void 0, void 0, function() {
        return __generator(this, function(n) {
            return [2, api.getVaultManagers(t.session, e)]
        })
    })
};