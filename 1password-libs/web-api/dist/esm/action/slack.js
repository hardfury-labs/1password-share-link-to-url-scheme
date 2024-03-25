var __awaiter = this && this.__awaiter || function(r, e, t, n) {
        return new(t || (t = Promise))(function(s, a) {
            function o(r) {
                try {
                    c(n.next(r))
                } catch (r) {
                    a(r)
                }
            }

            function i(r) {
                try {
                    c(n.throw(r))
                } catch (r) {
                    a(r)
                }
            }

            function c(r) {
                var e;
                r.done ? s(r.value) : (e = r.value, e instanceof t ? e : new t(function(r) {
                    r(e)
                })).then(o, i)
            }
            c((n = n.apply(r, e || [])).next())
        })
    },
    __generator = this && this.__generator || function(r, e) {
        var t, n, s, a, o = {
            label: 0,
            sent: function() {
                if (1 & s[0]) throw s[1];
                return s[1]
            },
            trys: [],
            ops: []
        };
        return a = {
            next: i(0),
            throw: i(1),
            return: i(2)
        }, "function" == typeof Symbol && (a[Symbol.iterator] = function() {
            return this
        }), a;

        function i(a) {
            return function(i) {
                return function(a) {
                    if (t) throw new TypeError("Generator is already executing.");
                    for (; o;) try {
                        if (t = 1, n && (s = 2 & a[0] ? n.return : a[0] ? n.throw || ((s = n.return) && s.call(n), 0) : n.next) && !(s = s.call(n, a[1])).done) return s;
                        switch (n = 0, s && (a = [2 & a[0], s.value]), a[0]) {
                            case 0:
                            case 1:
                                s = a;
                                break;
                            case 4:
                                return o.label++, {
                                    value: a[1],
                                    done: !1
                                };
                            case 5:
                                o.label++, n = a[1], a = [0];
                                continue;
                            case 7:
                                a = o.ops.pop(), o.trys.pop();
                                continue;
                            default:
                                if (!(s = (s = o.trys).length > 0 && s[s.length - 1]) && (6 === a[0] || 2 === a[0])) {
                                    o = 0;
                                    continue
                                }
                                if (3 === a[0] && (!s || a[1] > s[0] && a[1] < s[3])) {
                                    o.label = a[1];
                                    break
                                }
                                if (6 === a[0] && o.label < s[1]) {
                                    o.label = s[1], s = a;
                                    break
                                }
                                if (s && o.label < s[2]) {
                                    o.label = s[2], o.ops.push(a);
                                    break
                                }
                                s[2] && o.ops.pop(), o.trys.pop();
                                continue
                        }
                        a = e.call(r, o)
                    } catch (r) {
                        a = [6, r], n = 0
                    } finally {
                        t = s = 0
                    }
                    if (5 & a[0]) throw a[1];
                    return {
                        value: a[0] ? a[1] : void 0,
                        done: !0
                    }
                }([a, i])
            }
        }
    };
import {
    clone
} from "lodash-es";
import * as api from "../api";
import * as util from "../util";
import {
    errorHandler as eh
} from "../util/error_handler";
var codeLocation = "action/slack",
    errorHandler = eh(codeLocation);
export var getSlackApp = function(r) {
    return __awaiter(void 0, void 0, void 0, function() {
        var e;
        return __generator(this, function(t) {
            switch (t.label) {
                case 0:
                    return t.trys.push([0, 2, , 3]), [4, api.getSlackApp(r.session)];
                case 1:
                    return [2, {
                        type: "slack-app",
                        slackApp: t.sent()
                    }];
                case 2:
                    return e = t.sent(), [2, util.errors.isNewServerError(e) ? {
                        type: "server-error",
                        error: e
                    } : e instanceof Error ? {
                        type: "error",
                        error: e
                    } : {
                        type: "unknown-error",
                        error: e
                    }];
                case 3:
                    return [2]
            }
        })
    })
};
export var getSlackChannels = function(r) {
    return __awaiter(void 0, void 0, void 0, function() {
        var e;
        return __generator(this, function(t) {
            switch (t.label) {
                case 0:
                    return t.trys.push([0, 2, , 3]), [4, api.getSlackChannels(r.session)];
                case 1:
                    return [2, t.sent().channels];
                case 2:
                    return e = t.sent(), [2, errorHandler("getSlackChannels", e)];
                case 3:
                    return [2]
            }
        })
    })
};
export var getGridSlackGroups = function(r, e) {
    return __awaiter(void 0, void 0, void 0, function() {
        var t;
        return __generator(this, function(n) {
            switch (n.label) {
                case 0:
                    return n.trys.push([0, 2, , 3]), [4, api.getGridSlackGroups(r.session, e)];
                case 1:
                    return [2, n.sent().userGroups];
                case 2:
                    return t = n.sent(), [2, errorHandler("getSlackGroups", t)];
                case 3:
                    return [2]
            }
        })
    })
};
export var getGridSlackChannels = function(r, e) {
    return __awaiter(void 0, void 0, void 0, function() {
        var t;
        return __generator(this, function(n) {
            switch (n.label) {
                case 0:
                    return n.trys.push([0, 2, , 3]), [4, api.getGridSlackChannels(r.session, e)];
                case 1:
                    return [2, n.sent().channels];
                case 2:
                    return t = n.sent(), [2, errorHandler("getGridSlackChannels", t)];
                case 3:
                    return [2]
            }
        })
    })
};
export var getGridSlackUsers = function(r, e) {
    return __awaiter(void 0, void 0, void 0, function() {
        var t;
        return __generator(this, function(n) {
            switch (n.label) {
                case 0:
                    return n.trys.push([0, 2, , 3]), [4, api.getGridSlackUsers(r.session, e)];
                case 1:
                    return [2, {
                        type: "slack_users_response",
                        slackUsers: n.sent()
                    }];
                case 2:
                    return t = n.sent(), util.errors.isServerError(t, "slack_users_limit_reached") ? [2, {
                        type: "slack_users_response_large_team_error"
                    }] : [2, {
                        type: "slack_users_response_other_error"
                    }];
                case 3:
                    return [2]
            }
        })
    })
};
export var getGridSlackTeams = function(r) {
    return __awaiter(void 0, void 0, void 0, function() {
        var e;
        return __generator(this, function(t) {
            switch (t.label) {
                case 0:
                    return t.trys.push([0, 2, , 3]), [4, api.getGridSlackTeams(r.session)];
                case 1:
                    return [2, t.sent().teams];
                case 2:
                    return e = t.sent(), [2, errorHandler("getGridSlackTeams", e)];
                case 3:
                    return [2]
            }
        })
    })
};
export var getSlackGroups = function(r) {
    return __awaiter(void 0, void 0, void 0, function() {
        var e;
        return __generator(this, function(t) {
            switch (t.label) {
                case 0:
                    return t.trys.push([0, 2, , 3]), [4, api.getSlackGroups(r.session)];
                case 1:
                    return [2, t.sent().userGroups];
                case 2:
                    return e = t.sent(), [2, errorHandler("getSlackGroups", e)];
                case 3:
                    return [2]
            }
        })
    })
};
export var updateSlackApp = function(r, e) {
    var t = clone(e);
    return api.updateSlackApp(r.session, t).catch(errorHandler("updateSlackApp"))
};
export var getSlackUsers = function(r) {
    return __awaiter(void 0, void 0, void 0, function() {
        var e;
        return __generator(this, function(t) {
            switch (t.label) {
                case 0:
                    return t.trys.push([0, 2, , 3]), [4, api.getSlackUsers(r.session)];
                case 1:
                    return [2, {
                        type: "slack_users_response",
                        slackUsers: t.sent()
                    }];
                case 2:
                    return e = t.sent(), util.errors.isServerError(e, "slack_users_limit_reached") ? [2, {
                        type: "slack_users_response_large_team_error"
                    }] : [2, {
                        type: "slack_users_response_other_error"
                    }];
                case 3:
                    return [2]
            }
        })
    })
};
export var postSlackNonce = function(r) {
    return __awaiter(void 0, void 0, void 0, function() {
        var e;
        return __generator(this, function(t) {
            switch (t.label) {
                case 0:
                    return t.trys.push([0, 2, , 3]), [4, api.postSlackNonce(r.session)];
                case 1:
                    return [2, t.sent().nonce];
                case 2:
                    return e = t.sent(), console.error("Failed to get nonce:", e), [2, {
                        type: "error",
                        error: e
                    }];
                case 3:
                    return [2]
            }
        })
    })
};
export var postSlackAccessToken = function(r, e) {
    return __awaiter(void 0, void 0, void 0, function() {
        var t;
        return __generator(this, function(n) {
            switch (n.label) {
                case 0:
                    return n.trys.push([0, 2, , 3]), [4, api.postSlackAccessToken(r.session, e)];
                case 1:
                    return n.sent(), [3, 3];
                case 2:
                    throw t = n.sent(), new Error(t);
                case 3:
                    return [2]
            }
        })
    })
};