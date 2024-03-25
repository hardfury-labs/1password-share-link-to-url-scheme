var __awaiter = this && this.__awaiter || function(t, n, e, r) {
        return new(e || (e = Promise))(function(i, o) {
            function a(t) {
                try {
                    c(r.next(t))
                } catch (t) {
                    o(t)
                }
            }

            function u(t) {
                try {
                    c(r.throw(t))
                } catch (t) {
                    o(t)
                }
            }

            function c(t) {
                var n;
                t.done ? i(t.value) : (n = t.value, n instanceof e ? n : new e(function(t) {
                    t(n)
                })).then(a, u)
            }
            c((r = r.apply(t, n || [])).next())
        })
    },
    __generator = this && this.__generator || function(t, n) {
        var e, r, i, o, a = {
            label: 0,
            sent: function() {
                if (1 & i[0]) throw i[1];
                return i[1]
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
                    for (; a;) try {
                        if (e = 1, r && (i = 2 & o[0] ? r.return : o[0] ? r.throw || ((i = r.return) && i.call(r), 0) : r.next) && !(i = i.call(r, o[1])).done) return i;
                        switch (r = 0, i && (o = [2 & o[0], i.value]), o[0]) {
                            case 0:
                            case 1:
                                i = o;
                                break;
                            case 4:
                                return a.label++, {
                                    value: o[1],
                                    done: !1
                                };
                            case 5:
                                a.label++, r = o[1], o = [0];
                                continue;
                            case 7:
                                o = a.ops.pop(), a.trys.pop();
                                continue;
                            default:
                                if (!(i = (i = a.trys).length > 0 && i[i.length - 1]) && (6 === o[0] || 2 === o[0])) {
                                    a = 0;
                                    continue
                                }
                                if (3 === o[0] && (!i || o[1] > i[0] && o[1] < i[3])) {
                                    a.label = o[1];
                                    break
                                }
                                if (6 === o[0] && a.label < i[1]) {
                                    a.label = i[1], i = o;
                                    break
                                }
                                if (i && a.label < i[2]) {
                                    a.label = i[2], a.ops.push(o);
                                    break
                                }
                                i[2] && a.ops.pop(), a.trys.pop();
                                continue
                        }
                        o = n.call(t, a)
                    } catch (t) {
                        o = [6, t], r = 0
                    } finally {
                        e = i = 0
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
export var getEmailSubscriptions = function(t) {
    return __awaiter(void 0, void 0, void 0, function() {
        return __generator(this, function(n) {
            switch (n.label) {
                case 0:
                    return [4, api.getEmailSubscriptions(t.session)];
                case 1:
                    return [2, n.sent()]
            }
        })
    })
};
export var updateEmailSubscriptions = function(t, n) {
    return __awaiter(void 0, void 0, void 0, function() {
        return __generator(this, function(e) {
            return [2, api.updateEmailSubscriptions(t.session, n)]
        })
    })
};