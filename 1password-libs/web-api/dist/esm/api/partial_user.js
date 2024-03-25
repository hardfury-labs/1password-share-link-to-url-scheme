var __assign = this && this.__assign || function() {
        return (__assign = Object.assign || function(t) {
            for (var r, e = 1, n = arguments.length; e < n; e++)
                for (var a in r = arguments[e]) Object.prototype.hasOwnProperty.call(r, a) && (t[a] = r[a]);
            return t
        }).apply(this, arguments)
    },
    __awaiter = this && this.__awaiter || function(t, r, e, n) {
        return new(e || (e = Promise))(function(a, o) {
            function i(t) {
                try {
                    u(n.next(t))
                } catch (t) {
                    o(t)
                }
            }

            function s(t) {
                try {
                    u(n.throw(t))
                } catch (t) {
                    o(t)
                }
            }

            function u(t) {
                var r;
                t.done ? a(t.value) : (r = t.value, r instanceof e ? r : new e(function(t) {
                    t(r)
                })).then(i, s)
            }
            u((n = n.apply(t, r || [])).next())
        })
    },
    __generator = this && this.__generator || function(t, r) {
        var e, n, a, o, i = {
            label: 0,
            sent: function() {
                if (1 & a[0]) throw a[1];
                return a[1]
            },
            trys: [],
            ops: []
        };
        return o = {
            next: s(0),
            throw: s(1),
            return: s(2)
        }, "function" == typeof Symbol && (o[Symbol.iterator] = function() {
            return this
        }), o;

        function s(o) {
            return function(s) {
                return function(o) {
                    if (e) throw new TypeError("Generator is already executing.");
                    for (; i;) try {
                        if (e = 1, n && (a = 2 & o[0] ? n.return : o[0] ? n.throw || ((a = n.return) && a.call(n), 0) : n.next) && !(a = a.call(n, o[1])).done) return a;
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
                        o = r.call(t, i)
                    } catch (t) {
                        o = [6, t], n = 0
                    } finally {
                        e = a = 0
                    }
                    if (5 & o[0]) throw o[1];
                    return {
                        value: o[0] ? o[1] : void 0,
                        done: !0
                    }
                }([o, s])
            }
        }
    },
    __values = this && this.__values || function(t) {
        var r = "function" == typeof Symbol && Symbol.iterator,
            e = r && t[r],
            n = 0;
        if (e) return e.call(t);
        if (t && "number" == typeof t.length) return {
            next: function() {
                return t && n >= t.length && (t = void 0), {
                    value: t && t[n++],
                    done: !t
                }
            }
        };
        throw new TypeError(r ? "Object is not iterable." : "Symbol.iterator is not defined.")
    },
    __read = this && this.__read || function(t, r) {
        var e = "function" == typeof Symbol && t[Symbol.iterator];
        if (!e) return t;
        var n, a, o = e.call(t),
            i = [];
        try {
            for (;
                (void 0 === r || r-- > 0) && !(n = o.next()).done;) i.push(n.value)
        } catch (t) {
            a = {
                error: t
            }
        } finally {
            try {
                n && !n.done && (e = o.return) && e.call(o)
            } finally {
                if (a) throw a.error
            }
        }
        return i
    },
    __spread = this && this.__spread || function() {
        for (var t = [], r = 0; r < arguments.length; r++) t = t.concat(__read(arguments[r]));
        return t
    };
import * as t from "io-ts";
import {
    uniq
} from "lodash-es";
import {
    dataToParamString
} from "./util";
export var PartialUser = t.readonly(t.type({
    uuid: t.string,
    name: t.string,
    email: t.string,
    avatar: t.string,
    state: t.string,
    type: t.string
}));
var EMAILS_PARAM_MAX_LENGTH = 350;
export var getPartialUsers = function(t, r) {
    return __awaiter(void 0, void 0, void 0, function() {
        var e, n, a, o, i, s, u, l, c, f, _, p;
        return __generator(this, function(h) {
            switch (h.label) {
                case 0:
                    e = r.emails ? uniq(r.emails) : [], n = [];
                    try {
                        for (a = __values(e), o = a.next(); !o.done; o = a.next()) i = o.value, s = n.length - 1, u = n[s], s >= 0 && void 0 !== u && u.length + i.length < EMAILS_PARAM_MAX_LENGTH ? n[s] += "," + i : n.push(i)
                    } catch (t) {
                        _ = {
                            error: t
                        }
                    } finally {
                        try {
                            o && !o.done && (p = a.return) && p.call(a)
                        } finally {
                            if (_) throw _.error
                        }
                    }
                    return l = mapClientAttrsToServerAttrs(r.attrs), n.length > 0 ? (c = n.map(function(e) {
                        var n = __assign(__assign({}, r), {
                            attrs: l,
                            emails: e
                        });
                        return t.get("/api/v3/users" + dataToParamString(n))
                    }), [4, Promise.all(c)]) : [3, 2];
                case 1:
                    return [2, h.sent().reduce(function(t, r) {
                        return {
                            totalCount: t.totalCount + r.totalCount,
                            users: __spread(t.users, r.users),
                            serviceAccounts: __spread(t.serviceAccounts || [], r.serviceAccounts || [])
                        }
                    }, {
                        totalCount: 0,
                        users: [],
                        serviceAccounts: []
                    })];
                case 2:
                    return f = __assign(__assign({}, r), {
                        attrs: l
                    }), [2, t.get("/api/v3/users" + dataToParamString(f))]
            }
        })
    })
};
export function getGroupUsers(t, r, e) {
    var n = {
        attrs: mapClientAttrsToServerAttrs(e)
    };
    return t.get("/api/v1/group/" + r + "/users" + dataToParamString(n))
};
var serverParamKeys = {
        combinedPermissions: "combined-permissions"
    },
    mapClientAttrsToServerAttrs = function(t) {
        return t.map(function(t) {
            return serverParamKeys[t]
        })
    };