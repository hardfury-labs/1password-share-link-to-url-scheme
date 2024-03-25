"use strict";
var __awaiter = this && this.__awaiter || function(e, t, n, r) {
        return new(n || (n = Promise))(function(u, i) {
            function a(e) {
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
                e.done ? u(e.value) : (t = e.value, t instanceof n ? t : new n(function(e) {
                    e(t)
                })).then(a, o)
            }
            c((r = r.apply(e, t || [])).next())
        })
    },
    __generator = this && this.__generator || function(e, t) {
        var n, r, u, i, a = {
            label: 0,
            sent: function() {
                if (1 & u[0]) throw u[1];
                return u[1]
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
                    for (; a;) try {
                        if (n = 1, r && (u = 2 & i[0] ? r.return : i[0] ? r.throw || ((u = r.return) && u.call(r), 0) : r.next) && !(u = u.call(r, i[1])).done) return u;
                        switch (r = 0, u && (i = [2 & i[0], u.value]), i[0]) {
                            case 0:
                            case 1:
                                u = i;
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
                                if (!(u = (u = a.trys).length > 0 && u[u.length - 1]) && (6 === i[0] || 2 === i[0])) {
                                    a = 0;
                                    continue
                                }
                                if (3 === i[0] && (!u || i[1] > u[0] && i[1] < u[3])) {
                                    a.label = i[1];
                                    break
                                }
                                if (6 === i[0] && a.label < u[1]) {
                                    a.label = u[1], u = i;
                                    break
                                }
                                if (u && a.label < u[2]) {
                                    a.label = u[2], a.ops.push(i);
                                    break
                                }
                                u[2] && a.ops.pop(), a.trys.pop();
                                continue
                        }
                        i = t.call(e, a)
                    } catch (e) {
                        i = [6, e], r = 0
                    } finally {
                        n = u = 0
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
Object.defineProperty(exports, "__esModule", {
    value: !0
}), exports.setupTest = void 0;
var setupTest = function(e, t, n, r, u, i, a) {
    return __awaiter(void 0, void 0, void 0, function() {
        var o, c, s, l, f;
        return __generator(this, function(p) {
            switch (p.label) {
                case 0:
                    return o = t.map(function(e) {
                        return {
                            uuid: e,
                            createdAt: i,
                            deviceClientName: a
                        }
                    }), c = n.map(function(e) {
                        return {
                            uuid: e,
                            createdAt: i,
                            deviceClientName: a
                        }
                    }), s = r.map(function(e) {
                        return {
                            uuid: e,
                            createdAt: i,
                            deviceClientName: a
                        }
                    }), l = u.map(function(e) {
                        return {
                            uuid: e,
                            createdAt: i,
                            deviceClientName: a
                        }
                    }), f = {
                        users: o,
                        vaults: c,
                        groups: s,
                        files: l
                    }, [4, e.post("/api/v1/test/setup", f)];
                case 1:
                    return p.sent(), [2]
            }
        })
    })
};
exports.setupTest = setupTest;