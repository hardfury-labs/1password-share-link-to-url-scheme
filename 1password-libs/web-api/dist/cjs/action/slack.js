"use strict";
var __createBinding = this && this.__createBinding || (Object.create ? function(e, r, t, s) {
        void 0 === s && (s = t), Object.defineProperty(e, s, {
            enumerable: !0,
            get: function() {
                return r[t]
            }
        })
    } : function(e, r, t, s) {
        void 0 === s && (s = t), e[s] = r[t]
    }),
    __setModuleDefault = this && this.__setModuleDefault || (Object.create ? function(e, r) {
        Object.defineProperty(e, "default", {
            enumerable: !0,
            value: r
        })
    } : function(e, r) {
        e.default = r
    }),
    __importStar = this && this.__importStar || function(e) {
        if (e && e.__esModule) return e;
        var r = {};
        if (null != e)
            for (var t in e) "default" !== t && Object.prototype.hasOwnProperty.call(e, t) && __createBinding(r, e, t);
        return __setModuleDefault(r, e), r
    },
    __awaiter = this && this.__awaiter || function(e, r, t, s) {
        return new(t || (t = Promise))(function(n, a) {
            function o(e) {
                try {
                    i(s.next(e))
                } catch (e) {
                    a(e)
                }
            }

            function c(e) {
                try {
                    i(s.throw(e))
                } catch (e) {
                    a(e)
                }
            }

            function i(e) {
                var r;
                e.done ? n(e.value) : (r = e.value, r instanceof t ? r : new t(function(e) {
                    e(r)
                })).then(o, c)
            }
            i((s = s.apply(e, r || [])).next())
        })
    },
    __generator = this && this.__generator || function(e, r) {
        var t, s, n, a, o = {
            label: 0,
            sent: function() {
                if (1 & n[0]) throw n[1];
                return n[1]
            },
            trys: [],
            ops: []
        };
        return a = {
            next: c(0),
            throw: c(1),
            return: c(2)
        }, "function" == typeof Symbol && (a[Symbol.iterator] = function() {
            return this
        }), a;

        function c(a) {
            return function(c) {
                return function(a) {
                    if (t) throw new TypeError("Generator is already executing.");
                    for (; o;) try {
                        if (t = 1, s && (n = 2 & a[0] ? s.return : a[0] ? s.throw || ((n = s.return) && n.call(s), 0) : s.next) && !(n = n.call(s, a[1])).done) return n;
                        switch (s = 0, n && (a = [2 & a[0], n.value]), a[0]) {
                            case 0:
                            case 1:
                                n = a;
                                break;
                            case 4:
                                return o.label++, {
                                    value: a[1],
                                    done: !1
                                };
                            case 5:
                                o.label++, s = a[1], a = [0];
                                continue;
                            case 7:
                                a = o.ops.pop(), o.trys.pop();
                                continue;
                            default:
                                if (!(n = (n = o.trys).length > 0 && n[n.length - 1]) && (6 === a[0] || 2 === a[0])) {
                                    o = 0;
                                    continue
                                }
                                if (3 === a[0] && (!n || a[1] > n[0] && a[1] < n[3])) {
                                    o.label = a[1];
                                    break
                                }
                                if (6 === a[0] && o.label < n[1]) {
                                    o.label = n[1], n = a;
                                    break
                                }
                                if (n && o.label < n[2]) {
                                    o.label = n[2], o.ops.push(a);
                                    break
                                }
                                n[2] && o.ops.pop(), o.trys.pop();
                                continue
                        }
                        a = r.call(e, o)
                    } catch (e) {
                        a = [6, e], s = 0
                    } finally {
                        t = n = 0
                    }
                    if (5 & a[0]) throw a[1];
                    return {
                        value: a[0] ? a[1] : void 0,
                        done: !0
                    }
                }([a, c])
            }
        }
    };
Object.defineProperty(exports, "__esModule", {
    value: !0
}), exports.postSlackAccessToken = exports.postSlackNonce = exports.getSlackUsers = exports.updateSlackApp = exports.getSlackGroups = exports.getGridSlackTeams = exports.getGridSlackUsers = exports.getGridSlackChannels = exports.getGridSlackGroups = exports.getSlackChannels = exports.getSlackApp = void 0;
var lodash_es_1 = require("lodash-es"),
    api = __importStar(require("../api")),
    util = __importStar(require("../util")),
    error_handler_1 = require("../util/error_handler"),
    codeLocation = "action/slack",
    errorHandler = error_handler_1.errorHandler(codeLocation),
    getSlackApp = function(e) {
        return __awaiter(void 0, void 0, void 0, function() {
            var r;
            return __generator(this, function(t) {
                switch (t.label) {
                    case 0:
                        return t.trys.push([0, 2, , 3]), [4, api.getSlackApp(e.session)];
                    case 1:
                        return [2, {
                            type: "slack-app",
                            slackApp: t.sent()
                        }];
                    case 2:
                        return r = t.sent(), [2, util.errors.isNewServerError(r) ? {
                            type: "server-error",
                            error: r
                        } : r instanceof Error ? {
                            type: "error",
                            error: r
                        } : {
                            type: "unknown-error",
                            error: r
                        }];
                    case 3:
                        return [2]
                }
            })
        })
    };
exports.getSlackApp = getSlackApp;
var getSlackChannels = function(e) {
    return __awaiter(void 0, void 0, void 0, function() {
        var r;
        return __generator(this, function(t) {
            switch (t.label) {
                case 0:
                    return t.trys.push([0, 2, , 3]), [4, api.getSlackChannels(e.session)];
                case 1:
                    return [2, t.sent().channels];
                case 2:
                    return r = t.sent(), [2, errorHandler("getSlackChannels", r)];
                case 3:
                    return [2]
            }
        })
    })
};
exports.getSlackChannels = getSlackChannels;
var getGridSlackGroups = function(e, r) {
    return __awaiter(void 0, void 0, void 0, function() {
        var t;
        return __generator(this, function(s) {
            switch (s.label) {
                case 0:
                    return s.trys.push([0, 2, , 3]), [4, api.getGridSlackGroups(e.session, r)];
                case 1:
                    return [2, s.sent().userGroups];
                case 2:
                    return t = s.sent(), [2, errorHandler("getSlackGroups", t)];
                case 3:
                    return [2]
            }
        })
    })
};
exports.getGridSlackGroups = getGridSlackGroups;
var getGridSlackChannels = function(e, r) {
    return __awaiter(void 0, void 0, void 0, function() {
        var t;
        return __generator(this, function(s) {
            switch (s.label) {
                case 0:
                    return s.trys.push([0, 2, , 3]), [4, api.getGridSlackChannels(e.session, r)];
                case 1:
                    return [2, s.sent().channels];
                case 2:
                    return t = s.sent(), [2, errorHandler("getGridSlackChannels", t)];
                case 3:
                    return [2]
            }
        })
    })
};
exports.getGridSlackChannels = getGridSlackChannels;
var getGridSlackUsers = function(e, r) {
    return __awaiter(void 0, void 0, void 0, function() {
        var t;
        return __generator(this, function(s) {
            switch (s.label) {
                case 0:
                    return s.trys.push([0, 2, , 3]), [4, api.getGridSlackUsers(e.session, r)];
                case 1:
                    return [2, {
                        type: "slack_users_response",
                        slackUsers: s.sent()
                    }];
                case 2:
                    return t = s.sent(), util.errors.isServerError(t, "slack_users_limit_reached") ? [2, {
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
exports.getGridSlackUsers = getGridSlackUsers;
var getGridSlackTeams = function(e) {
    return __awaiter(void 0, void 0, void 0, function() {
        var r;
        return __generator(this, function(t) {
            switch (t.label) {
                case 0:
                    return t.trys.push([0, 2, , 3]), [4, api.getGridSlackTeams(e.session)];
                case 1:
                    return [2, t.sent().teams];
                case 2:
                    return r = t.sent(), [2, errorHandler("getGridSlackTeams", r)];
                case 3:
                    return [2]
            }
        })
    })
};
exports.getGridSlackTeams = getGridSlackTeams;
var getSlackGroups = function(e) {
    return __awaiter(void 0, void 0, void 0, function() {
        var r;
        return __generator(this, function(t) {
            switch (t.label) {
                case 0:
                    return t.trys.push([0, 2, , 3]), [4, api.getSlackGroups(e.session)];
                case 1:
                    return [2, t.sent().userGroups];
                case 2:
                    return r = t.sent(), [2, errorHandler("getSlackGroups", r)];
                case 3:
                    return [2]
            }
        })
    })
};
exports.getSlackGroups = getSlackGroups;
var updateSlackApp = function(e, r) {
    var t = lodash_es_1.clone(r);
    return api.updateSlackApp(e.session, t).catch(errorHandler("updateSlackApp"))
};
exports.updateSlackApp = updateSlackApp;
var getSlackUsers = function(e) {
    return __awaiter(void 0, void 0, void 0, function() {
        var r;
        return __generator(this, function(t) {
            switch (t.label) {
                case 0:
                    return t.trys.push([0, 2, , 3]), [4, api.getSlackUsers(e.session)];
                case 1:
                    return [2, {
                        type: "slack_users_response",
                        slackUsers: t.sent()
                    }];
                case 2:
                    return r = t.sent(), util.errors.isServerError(r, "slack_users_limit_reached") ? [2, {
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
exports.getSlackUsers = getSlackUsers;
var postSlackNonce = function(e) {
    return __awaiter(void 0, void 0, void 0, function() {
        var r;
        return __generator(this, function(t) {
            switch (t.label) {
                case 0:
                    return t.trys.push([0, 2, , 3]), [4, api.postSlackNonce(e.session)];
                case 1:
                    return [2, t.sent().nonce];
                case 2:
                    return r = t.sent(), console.error("Failed to get nonce:", r), [2, {
                        type: "error",
                        error: r
                    }];
                case 3:
                    return [2]
            }
        })
    })
};
exports.postSlackNonce = postSlackNonce;
var postSlackAccessToken = function(e, r) {
    return __awaiter(void 0, void 0, void 0, function() {
        var t;
        return __generator(this, function(s) {
            switch (s.label) {
                case 0:
                    return s.trys.push([0, 2, , 3]), [4, api.postSlackAccessToken(e.session, r)];
                case 1:
                    return s.sent(), [3, 3];
                case 2:
                    throw t = s.sent(), new Error(t);
                case 3:
                    return [2]
            }
        })
    })
};
exports.postSlackAccessToken = postSlackAccessToken;