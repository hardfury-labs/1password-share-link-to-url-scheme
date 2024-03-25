"use strict";
var __awaiter = this && this.__awaiter || function(e, t, r, a) {
        return new(r || (r = Promise))(function(n, s) {
            function o(e) {
                try {
                    l(a.next(e))
                } catch (e) {
                    s(e)
                }
            }

            function c(e) {
                try {
                    l(a.throw(e))
                } catch (e) {
                    s(e)
                }
            }

            function l(e) {
                var t;
                e.done ? n(e.value) : (t = e.value, t instanceof r ? t : new r(function(e) {
                    e(t)
                })).then(o, c)
            }
            l((a = a.apply(e, t || [])).next())
        })
    },
    __generator = this && this.__generator || function(e, t) {
        var r, a, n, s, o = {
            label: 0,
            sent: function() {
                if (1 & n[0]) throw n[1];
                return n[1]
            },
            trys: [],
            ops: []
        };
        return s = {
            next: c(0),
            throw: c(1),
            return: c(2)
        }, "function" == typeof Symbol && (s[Symbol.iterator] = function() {
            return this
        }), s;

        function c(s) {
            return function(c) {
                return function(s) {
                    if (r) throw new TypeError("Generator is already executing.");
                    for (; o;) try {
                        if (r = 1, a && (n = 2 & s[0] ? a.return : s[0] ? a.throw || ((n = a.return) && n.call(a), 0) : a.next) && !(n = n.call(a, s[1])).done) return n;
                        switch (a = 0, n && (s = [2 & s[0], n.value]), s[0]) {
                            case 0:
                            case 1:
                                n = s;
                                break;
                            case 4:
                                return o.label++, {
                                    value: s[1],
                                    done: !1
                                };
                            case 5:
                                o.label++, a = s[1], s = [0];
                                continue;
                            case 7:
                                s = o.ops.pop(), o.trys.pop();
                                continue;
                            default:
                                if (!(n = (n = o.trys).length > 0 && n[n.length - 1]) && (6 === s[0] || 2 === s[0])) {
                                    o = 0;
                                    continue
                                }
                                if (3 === s[0] && (!n || s[1] > n[0] && s[1] < n[3])) {
                                    o.label = s[1];
                                    break
                                }
                                if (6 === s[0] && o.label < n[1]) {
                                    o.label = n[1], n = s;
                                    break
                                }
                                if (n && o.label < n[2]) {
                                    o.label = n[2], o.ops.push(s);
                                    break
                                }
                                n[2] && o.ops.pop(), o.trys.pop();
                                continue
                        }
                        s = t.call(e, o)
                    } catch (e) {
                        s = [6, e], a = 0
                    } finally {
                        r = n = 0
                    }
                    if (5 & s[0]) throw s[1];
                    return {
                        value: s[0] ? s[1] : void 0,
                        done: !0
                    }
                }([s, c])
            }
        }
    };
Object.defineProperty(exports, "__esModule", {
    value: !0
}), exports.postSlackAccessToken = exports.postSlackNonce = exports.updateSlackApp = exports.getSlackApp = exports.getSlackGroups = exports.getGridSlackTeams = exports.getGridSlackUsers = exports.getGridSlackGroups = exports.getGridSlackChannels = exports.getSlackChannels = exports.getSlackUsers = void 0;
var getSlackUsers = function(e) {
    return e.get("/api/v1/slack/users")
};
exports.getSlackUsers = getSlackUsers;
var getSlackChannels = function(e) {
    return e.get("/api/v1/slack/channels")
};
exports.getSlackChannels = getSlackChannels;
var getGridSlackChannels = function(e, t) {
    return e.get("/api/v1/slack/grid/teams/" + t + "/channels")
};
exports.getGridSlackChannels = getGridSlackChannels;
var getGridSlackGroups = function(e, t) {
    return e.get("/api/v1/slack/grid/teams/" + t + "/usergroups")
};
exports.getGridSlackGroups = getGridSlackGroups;
var getGridSlackUsers = function(e, t) {
    return e.get("/api/v1/slack/grid/teams/" + t + "/users")
};
exports.getGridSlackUsers = getGridSlackUsers;
var getGridSlackTeams = function(e) {
    return e.get("/api/v1/slack/grid/teams")
};
exports.getGridSlackTeams = getGridSlackTeams;
var getSlackGroups = function(e) {
    return e.get("/api/v1/slack/usergroups")
};
exports.getSlackGroups = getSlackGroups;
var getSlackApp = function(e) {
    return e.get("/api/v2/slack/app")
};
exports.getSlackApp = getSlackApp;
var updateSlackApp = function(e, t) {
    return __awaiter(void 0, void 0, void 0, function() {
        return __generator(this, function(r) {
            switch (r.label) {
                case 0:
                    return [4, e.put("/api/v1/slack/app", t)];
                case 1:
                    return r.sent(), [2]
            }
        })
    })
};
exports.updateSlackApp = updateSlackApp;
var postSlackNonce = function(e) {
    return e.post("/api/v1/slack/oauth/nonce")
};
exports.postSlackNonce = postSlackNonce;
var postSlackAccessToken = function(e, t) {
    return __awaiter(void 0, void 0, void 0, function() {
        return __generator(this, function(r) {
            return [2, e.post("/api/v1/slack/oauth/verify", t)]
        })
    })
};
exports.postSlackAccessToken = postSlackAccessToken;