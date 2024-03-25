var __awaiter = this && this.__awaiter || function(t, e, r, n) {
        return new(r || (r = Promise))(function(a, o) {
            function i(t) {
                try {
                    u(n.next(t))
                } catch (t) {
                    o(t)
                }
            }

            function c(t) {
                try {
                    u(n.throw(t))
                } catch (t) {
                    o(t)
                }
            }

            function u(t) {
                var e;
                t.done ? a(t.value) : (e = t.value, e instanceof r ? e : new r(function(t) {
                    t(e)
                })).then(i, c)
            }
            u((n = n.apply(t, e || [])).next())
        })
    },
    __generator = this && this.__generator || function(t, e) {
        var r, n, a, o, i = {
            label: 0,
            sent: function() {
                if (1 & a[0]) throw a[1];
                return a[1]
            },
            trys: [],
            ops: []
        };
        return o = {
            next: c(0),
            throw: c(1),
            return: c(2)
        }, "function" == typeof Symbol && (o[Symbol.iterator] = function() {
            return this
        }), o;

        function c(o) {
            return function(c) {
                return function(o) {
                    if (r) throw new TypeError("Generator is already executing.");
                    for (; i;) try {
                        if (r = 1, n && (a = 2 & o[0] ? n.return : o[0] ? n.throw || ((a = n.return) && a.call(n), 0) : n.next) && !(a = a.call(n, o[1])).done) return a;
                        switch (n = 0, a && (o = [2 & o[0], a.value]), o[0]) {
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
                                i.label++, n = o[1], o = [0];
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
                        o = [6, t], n = 0
                    } finally {
                        r = a = 0
                    }
                    if (5 & o[0]) throw o[1];
                    return {
                        value: o[0] ? o[1] : void 0,
                        done: !0
                    }
                }([o, c])
            }
        }
    };
export var getSlackUsers = function(t) {
    return t.get("/api/v1/slack/users")
};
export var getSlackChannels = function(t) {
    return t.get("/api/v1/slack/channels")
};
export var getGridSlackChannels = function(t, e) {
    return t.get("/api/v1/slack/grid/teams/" + e + "/channels")
};
export var getGridSlackGroups = function(t, e) {
    return t.get("/api/v1/slack/grid/teams/" + e + "/usergroups")
};
export var getGridSlackUsers = function(t, e) {
    return t.get("/api/v1/slack/grid/teams/" + e + "/users")
};
export var getGridSlackTeams = function(t) {
    return t.get("/api/v1/slack/grid/teams")
};
export var getSlackGroups = function(t) {
    return t.get("/api/v1/slack/usergroups")
};
export var getSlackApp = function(t) {
    return t.get("/api/v2/slack/app")
};
export var updateSlackApp = function(t, e) {
    return __awaiter(void 0, void 0, void 0, function() {
        return __generator(this, function(r) {
            switch (r.label) {
                case 0:
                    return [4, t.put("/api/v1/slack/app", e)];
                case 1:
                    return r.sent(), [2]
            }
        })
    })
};
export var postSlackNonce = function(t) {
    return t.post("/api/v1/slack/oauth/nonce")
};
export var postSlackAccessToken = function(t, e) {
    return __awaiter(void 0, void 0, void 0, function() {
        return __generator(this, function(r) {
            return [2, t.post("/api/v1/slack/oauth/verify", e)]
        })
    })
};