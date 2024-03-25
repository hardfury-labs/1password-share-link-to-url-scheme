"use strict";
var __assign = this && this.__assign || function() {
        return (__assign = Object.assign || function(t) {
            for (var e, r = 1, n = arguments.length; r < n; r++)
                for (var a in e = arguments[r]) Object.prototype.hasOwnProperty.call(e, a) && (t[a] = e[a]);
            return t
        }).apply(this, arguments)
    },
    __createBinding = this && this.__createBinding || (Object.create ? function(t, e, r, n) {
        void 0 === n && (n = r), Object.defineProperty(t, n, {
            enumerable: !0,
            get: function() {
                return e[r]
            }
        })
    } : function(t, e, r, n) {
        void 0 === n && (n = r), t[n] = e[r]
    }),
    __setModuleDefault = this && this.__setModuleDefault || (Object.create ? function(t, e) {
        Object.defineProperty(t, "default", {
            enumerable: !0,
            value: e
        })
    } : function(t, e) {
        t.default = e
    }),
    __importStar = this && this.__importStar || function(t) {
        if (t && t.__esModule) return t;
        var e = {};
        if (null != t)
            for (var r in t) "default" !== r && Object.prototype.hasOwnProperty.call(t, r) && __createBinding(e, t, r);
        return __setModuleDefault(e, t), e
    },
    __awaiter = this && this.__awaiter || function(t, e, r, n) {
        return new(r || (r = Promise))(function(a, i) {
            function o(t) {
                try {
                    u(n.next(t))
                } catch (t) {
                    i(t)
                }
            }

            function s(t) {
                try {
                    u(n.throw(t))
                } catch (t) {
                    i(t)
                }
            }

            function u(t) {
                var e;
                t.done ? a(t.value) : (e = t.value, e instanceof r ? e : new r(function(t) {
                    t(e)
                })).then(o, s)
            }
            u((n = n.apply(t, e || [])).next())
        })
    },
    __generator = this && this.__generator || function(t, e) {
        var r, n, a, i, o = {
            label: 0,
            sent: function() {
                if (1 & a[0]) throw a[1];
                return a[1]
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
                    for (; o;) try {
                        if (r = 1, n && (a = 2 & i[0] ? n.return : i[0] ? n.throw || ((a = n.return) && a.call(n), 0) : n.next) && !(a = a.call(n, i[1])).done) return a;
                        switch (n = 0, a && (i = [2 & i[0], a.value]), i[0]) {
                            case 0:
                            case 1:
                                a = i;
                                break;
                            case 4:
                                return o.label++, {
                                    value: i[1],
                                    done: !1
                                };
                            case 5:
                                o.label++, n = i[1], i = [0];
                                continue;
                            case 7:
                                i = o.ops.pop(), o.trys.pop();
                                continue;
                            default:
                                if (!(a = (a = o.trys).length > 0 && a[a.length - 1]) && (6 === i[0] || 2 === i[0])) {
                                    o = 0;
                                    continue
                                }
                                if (3 === i[0] && (!a || i[1] > a[0] && i[1] < a[3])) {
                                    o.label = i[1];
                                    break
                                }
                                if (6 === i[0] && o.label < a[1]) {
                                    o.label = a[1], a = i;
                                    break
                                }
                                if (a && o.label < a[2]) {
                                    o.label = a[2], o.ops.push(i);
                                    break
                                }
                                a[2] && o.ops.pop(), o.trys.pop();
                                continue
                        }
                        i = e.call(t, o)
                    } catch (t) {
                        i = [6, t], n = 0
                    } finally {
                        r = a = 0
                    }
                    if (5 & i[0]) throw i[1];
                    return {
                        value: i[0] ? i[1] : void 0,
                        done: !0
                    }
                }([i, s])
            }
        }
    },
    __values = this && this.__values || function(t) {
        var e = "function" == typeof Symbol && Symbol.iterator,
            r = e && t[e],
            n = 0;
        if (r) return r.call(t);
        if (t && "number" == typeof t.length) return {
            next: function() {
                return t && n >= t.length && (t = void 0), {
                    value: t && t[n++],
                    done: !t
                }
            }
        };
        throw new TypeError(e ? "Object is not iterable." : "Symbol.iterator is not defined.")
    },
    __read = this && this.__read || function(t, e) {
        var r = "function" == typeof Symbol && t[Symbol.iterator];
        if (!r) return t;
        var n, a, i = r.call(t),
            o = [];
        try {
            for (;
                (void 0 === e || e-- > 0) && !(n = i.next()).done;) o.push(n.value)
        } catch (t) {
            a = {
                error: t
            }
        } finally {
            try {
                n && !n.done && (r = i.return) && r.call(i)
            } finally {
                if (a) throw a.error
            }
        }
        return o
    },
    __spread = this && this.__spread || function() {
        for (var t = [], e = 0; e < arguments.length; e++) t = t.concat(__read(arguments[e]));
        return t
    };
Object.defineProperty(exports, "__esModule", {
    value: !0
}), exports.getGroupUsers = exports.getPartialUsers = exports.PartialUser = void 0;
var t = __importStar(require("io-ts")),
    lodash_es_1 = require("lodash-es"),
    util_1 = require("./util");
exports.PartialUser = t.readonly(t.type({
    uuid: t.string,
    name: t.string,
    email: t.string,
    avatar: t.string,
    state: t.string,
    type: t.string
}));
var EMAILS_PARAM_MAX_LENGTH = 350,
    getPartialUsers = function(t, e) {
        return __awaiter(void 0, void 0, void 0, function() {
            var r, n, a, i, o, s, u, l, c, _, f, p;
            return __generator(this, function(h) {
                switch (h.label) {
                    case 0:
                        r = e.emails ? lodash_es_1.uniq(e.emails) : [], n = [];
                        try {
                            for (a = __values(r), i = a.next(); !i.done; i = a.next()) o = i.value, s = n.length - 1, u = n[s], s >= 0 && void 0 !== u && u.length + o.length < EMAILS_PARAM_MAX_LENGTH ? n[s] += "," + o : n.push(o)
                        } catch (t) {
                            f = {
                                error: t
                            }
                        } finally {
                            try {
                                i && !i.done && (p = a.return) && p.call(a)
                            } finally {
                                if (f) throw f.error
                            }
                        }
                        return l = mapClientAttrsToServerAttrs(e.attrs), n.length > 0 ? (c = n.map(function(r) {
                            var n = __assign(__assign({}, e), {
                                attrs: l,
                                emails: r
                            });
                            return t.get("/api/v3/users" + util_1.dataToParamString(n))
                        }), [4, Promise.all(c)]) : [3, 2];
                    case 1:
                        return [2, h.sent().reduce(function(t, e) {
                            return {
                                totalCount: t.totalCount + e.totalCount,
                                users: __spread(t.users, e.users),
                                serviceAccounts: __spread(t.serviceAccounts || [], e.serviceAccounts || [])
                            }
                        }, {
                            totalCount: 0,
                            users: [],
                            serviceAccounts: []
                        })];
                    case 2:
                        return _ = __assign(__assign({}, e), {
                            attrs: l
                        }), [2, t.get("/api/v3/users" + util_1.dataToParamString(_))]
                }
            })
        })
    };

function getGroupUsers(t, e, r) {
    var n = {
        attrs: mapClientAttrsToServerAttrs(r)
    };
    return t.get("/api/v1/group/" + e + "/users" + util_1.dataToParamString(n))
}
exports.getPartialUsers = getPartialUsers, exports.getGroupUsers = getGroupUsers;
var serverParamKeys = {
        combinedPermissions: "combined-permissions"
    },
    mapClientAttrsToServerAttrs = function(t) {
        return t.map(function(t) {
            return serverParamKeys[t]
        })
    };