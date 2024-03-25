"use strict";
var __createBinding = this && this.__createBinding || (Object.create ? function(e, t, r, o) {
        void 0 === o && (o = r), Object.defineProperty(e, o, {
            enumerable: !0,
            get: function() {
                return t[r]
            }
        })
    } : function(e, t, r, o) {
        void 0 === o && (o = r), e[o] = t[r]
    }),
    __setModuleDefault = this && this.__setModuleDefault || (Object.create ? function(e, t) {
        Object.defineProperty(e, "default", {
            enumerable: !0,
            value: t
        })
    } : function(e, t) {
        e.default = t
    }),
    __importStar = this && this.__importStar || function(e) {
        if (e && e.__esModule) return e;
        var t = {};
        if (null != e)
            for (var r in e) "default" !== r && Object.prototype.hasOwnProperty.call(e, r) && __createBinding(t, e, r);
        return __setModuleDefault(t, e), t
    },
    __awaiter = this && this.__awaiter || function(e, t, r, o) {
        return new(r || (r = Promise))(function(n, i) {
            function a(e) {
                try {
                    u(o.next(e))
                } catch (e) {
                    i(e)
                }
            }

            function s(e) {
                try {
                    u(o.throw(e))
                } catch (e) {
                    i(e)
                }
            }

            function u(e) {
                var t;
                e.done ? n(e.value) : (t = e.value, t instanceof r ? t : new r(function(e) {
                    e(t)
                })).then(a, s)
            }
            u((o = o.apply(e, t || [])).next())
        })
    },
    __generator = this && this.__generator || function(e, t) {
        var r, o, n, i, a = {
            label: 0,
            sent: function() {
                if (1 & n[0]) throw n[1];
                return n[1]
            },
            trys: [],
            ops: []
        };
        return i = {
            next: s(0),
            throw: s(1),
            return: s(2)
        }, "function" == typeof Symbol && (i[Symbol.iterator] = function() {
            return this
        }), i;

        function s(i) {
            return function(s) {
                return function(i) {
                    if (r) throw new TypeError("Generator is already executing.");
                    for (; a;) try {
                        if (r = 1, o && (n = 2 & i[0] ? o.return : i[0] ? o.throw || ((n = o.return) && n.call(o), 0) : o.next) && !(n = n.call(o, i[1])).done) return n;
                        switch (o = 0, n && (i = [2 & i[0], n.value]), i[0]) {
                            case 0:
                            case 1:
                                n = i;
                                break;
                            case 4:
                                return a.label++, {
                                    value: i[1],
                                    done: !1
                                };
                            case 5:
                                a.label++, o = i[1], i = [0];
                                continue;
                            case 7:
                                i = a.ops.pop(), a.trys.pop();
                                continue;
                            default:
                                if (!(n = (n = a.trys).length > 0 && n[n.length - 1]) && (6 === i[0] || 2 === i[0])) {
                                    a = 0;
                                    continue
                                }
                                if (3 === i[0] && (!n || i[1] > n[0] && i[1] < n[3])) {
                                    a.label = i[1];
                                    break
                                }
                                if (6 === i[0] && a.label < n[1]) {
                                    a.label = n[1], n = i;
                                    break
                                }
                                if (n && a.label < n[2]) {
                                    a.label = n[2], a.ops.push(i);
                                    break
                                }
                                n[2] && a.ops.pop(), a.trys.pop();
                                continue
                        }
                        i = t.call(e, a)
                    } catch (e) {
                        i = [6, e], o = 0
                    } finally {
                        r = n = 0
                    }
                    if (5 & i[0]) throw i[1];
                    return {
                        value: i[0] ? i[1] : void 0,
                        done: !0
                    }
                }([i, s])
            }
        }
    };
Object.defineProperty(exports, "__esModule", {
    value: !0
}), exports.deleteUserCookie = exports.deleteAccountCookie = exports.setUserCookie = exports.getUserCookies = void 0;
var lodash_es_1 = require("lodash-es"),
    api = __importStar(require("../api")),
    parser = __importStar(require("../parser")),
    getUserCookies = function(e) {
        return __awaiter(void 0, void 0, void 0, function() {
            var t, r, o, n;
            return __generator(this, function(i) {
                switch (i.label) {
                    case 0:
                        return navigator.cookieEnabled ? ((t = lodash_es_1.clone(e.config.siblingDomains)).push(e.config.server), r = t.map(function(t) {
                            return api.getUserCookies(e.session, t)
                        }), [4, Promise.all(r)]) : [2, []];
                    case 1:
                        return o = i.sent(), n = lodash_es_1.flatten(o), [2, parser.userCookiesFromAPI(n)]
                }
            })
        })
    };
exports.getUserCookies = getUserCookies;
var setUserCookie = function(e) {
    return __awaiter(void 0, void 0, void 0, function() {
        return __generator(this, function(t) {
            switch (t.label) {
                case 0:
                    return navigator.cookieEnabled ? [4, api.setUserCookie(e.session, e.config.server)] : [2];
                case 1:
                    return t.sent(), [2]
            }
        })
    })
};
exports.setUserCookie = setUserCookie;
var deleteAccountCookie = function(e, t) {
    return __awaiter(void 0, void 0, void 0, function() {
        return __generator(this, function(r) {
            switch (r.label) {
                case 0:
                    return navigator.cookieEnabled ? [4, api.deleteAccountCookie(e.session, e.config.server, t)] : [2];
                case 1:
                    return r.sent(), [2]
            }
        })
    })
};
exports.deleteAccountCookie = deleteAccountCookie;
var deleteUserCookie = function(e, t) {
    return __awaiter(void 0, void 0, void 0, function() {
        return __generator(this, function(r) {
            switch (r.label) {
                case 0:
                    return navigator.cookieEnabled ? [4, api.deleteUserCookie(e.session, e.config.server, t)] : [2];
                case 1:
                    return r.sent(), [2]
            }
        })
    })
};
exports.deleteUserCookie = deleteUserCookie;