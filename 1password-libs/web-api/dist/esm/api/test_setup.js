var __awaiter = this && this.__awaiter || function(e, t, n, r) {
        return new(n || (n = Promise))(function(a, i) {
            function u(e) {
                try {
                    c(r.next(e))
                } catch (e) {
                    i(e)
                }
            }

            function o(e) {
                try {
                    c(r.throw(e))
                } catch (e) {
                    i(e)
                }
            }

            function c(e) {
                var t;
                e.done ? a(e.value) : (t = e.value, t instanceof n ? t : new n(function(e) {
                    e(t)
                })).then(u, o)
            }
            c((r = r.apply(e, t || [])).next())
        })
    },
    __generator = this && this.__generator || function(e, t) {
        var n, r, a, i, u = {
            label: 0,
            sent: function() {
                if (1 & a[0]) throw a[1];
                return a[1]
            },
            trys: [],
            ops: []
        };
        return i = {
            next: o(0),
            throw: o(1),
            return: o(2)
        }, "function" == typeof Symbol && (i[Symbol.iterator] = function() {
            return this
        }), i;

        function o(i) {
            return function(o) {
                return function(i) {
                    if (n) throw new TypeError("Generator is already executing.");
                    for (; u;) try {
                        if (n = 1, r && (a = 2 & i[0] ? r.return : i[0] ? r.throw || ((a = r.return) && a.call(r), 0) : r.next) && !(a = a.call(r, i[1])).done) return a;
                        switch (r = 0, a && (i = [2 & i[0], a.value]), i[0]) {
                            case 0:
                            case 1:
                                a = i;
                                break;
                            case 4:
                                return u.label++, {
                                    value: i[1],
                                    done: !1
                                };
                            case 5:
                                u.label++, r = i[1], i = [0];
                                continue;
                            case 7:
                                i = u.ops.pop(), u.trys.pop();
                                continue;
                            default:
                                if (!(a = (a = u.trys).length > 0 && a[a.length - 1]) && (6 === i[0] || 2 === i[0])) {
                                    u = 0;
                                    continue
                                }
                                if (3 === i[0] && (!a || i[1] > a[0] && i[1] < a[3])) {
                                    u.label = i[1];
                                    break
                                }
                                if (6 === i[0] && u.label < a[1]) {
                                    u.label = a[1], a = i;
                                    break
                                }
                                if (a && u.label < a[2]) {
                                    u.label = a[2], u.ops.push(i);
                                    break
                                }
                                a[2] && u.ops.pop(), u.trys.pop();
                                continue
                        }
                        i = t.call(e, u)
                    } catch (e) {
                        i = [6, e], r = 0
                    } finally {
                        n = a = 0
                    }
                    if (5 & i[0]) throw i[1];
                    return {
                        value: i[0] ? i[1] : void 0,
                        done: !0
                    }
                }([i, o])
            }
        }
    };
export var setupTest = function(e, t, n, r, a, i, u) {
    return __awaiter(void 0, void 0, void 0, function() {
        var o, c, l, s, f;
        return __generator(this, function(p) {
            switch (p.label) {
                case 0:
                    return o = t.map(function(e) {
                        return {
                            uuid: e,
                            createdAt: i,
                            deviceClientName: u
                        }
                    }), c = n.map(function(e) {
                        return {
                            uuid: e,
                            createdAt: i,
                            deviceClientName: u
                        }
                    }), l = r.map(function(e) {
                        return {
                            uuid: e,
                            createdAt: i,
                            deviceClientName: u
                        }
                    }), s = a.map(function(e) {
                        return {
                            uuid: e,
                            createdAt: i,
                            deviceClientName: u
                        }
                    }), f = {
                        users: o,
                        vaults: c,
                        groups: l,
                        files: s
                    }, [4, e.post("/api/v1/test/setup", f)];
                case 1:
                    return p.sent(), [2]
            }
        })
    })
};