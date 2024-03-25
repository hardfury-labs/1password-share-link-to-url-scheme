var __assign = this && this.__assign || function() {
        return (__assign = Object.assign || function(e) {
            for (var t, r = 1, i = arguments.length; r < i; r++)
                for (var n in t = arguments[r]) Object.prototype.hasOwnProperty.call(t, n) && (e[n] = t[n]);
            return e
        }).apply(this, arguments)
    },
    __awaiter = this && this.__awaiter || function(e, t, r, i) {
        return new(r || (r = Promise))(function(n, a) {
            function s(e) {
                try {
                    c(i.next(e))
                } catch (e) {
                    a(e)
                }
            }

            function o(e) {
                try {
                    c(i.throw(e))
                } catch (e) {
                    a(e)
                }
            }

            function c(e) {
                var t;
                e.done ? n(e.value) : (t = e.value, t instanceof r ? t : new r(function(e) {
                    e(t)
                })).then(s, o)
            }
            c((i = i.apply(e, t || [])).next())
        })
    },
    __generator = this && this.__generator || function(e, t) {
        var r, i, n, a, s = {
            label: 0,
            sent: function() {
                if (1 & n[0]) throw n[1];
                return n[1]
            },
            trys: [],
            ops: []
        };
        return a = {
            next: o(0),
            throw: o(1),
            return: o(2)
        }, "function" == typeof Symbol && (a[Symbol.iterator] = function() {
            return this
        }), a;

        function o(a) {
            return function(o) {
                return function(a) {
                    if (r) throw new TypeError("Generator is already executing.");
                    for (; s;) try {
                        if (r = 1, i && (n = 2 & a[0] ? i.return : a[0] ? i.throw || ((n = i.return) && n.call(i), 0) : i.next) && !(n = n.call(i, a[1])).done) return n;
                        switch (i = 0, n && (a = [2 & a[0], n.value]), a[0]) {
                            case 0:
                            case 1:
                                n = a;
                                break;
                            case 4:
                                return s.label++, {
                                    value: a[1],
                                    done: !1
                                };
                            case 5:
                                s.label++, i = a[1], a = [0];
                                continue;
                            case 7:
                                a = s.ops.pop(), s.trys.pop();
                                continue;
                            default:
                                if (!(n = (n = s.trys).length > 0 && n[n.length - 1]) && (6 === a[0] || 2 === a[0])) {
                                    s = 0;
                                    continue
                                }
                                if (3 === a[0] && (!n || a[1] > n[0] && a[1] < n[3])) {
                                    s.label = a[1];
                                    break
                                }
                                if (6 === a[0] && s.label < n[1]) {
                                    s.label = n[1], n = a;
                                    break
                                }
                                if (n && s.label < n[2]) {
                                    s.label = n[2], s.ops.push(a);
                                    break
                                }
                                n[2] && s.ops.pop(), s.trys.pop();
                                continue
                        }
                        a = t.call(e, s)
                    } catch (e) {
                        a = [6, e], i = 0
                    } finally {
                        r = n = 0
                    }
                    if (5 & a[0]) throw a[1];
                    return {
                        value: a[0] ? a[1] : void 0,
                        done: !0
                    }
                }([a, o])
            }
        }
    },
    __rest = this && this.__rest || function(e, t) {
        var r = {};
        for (var i in e) Object.prototype.hasOwnProperty.call(e, i) && t.indexOf(i) < 0 && (r[i] = e[i]);
        if (null != e && "function" == typeof Object.getOwnPropertySymbols) {
            var n = 0;
            for (i = Object.getOwnPropertySymbols(e); n < i.length; n++) t.indexOf(i[n]) < 0 && Object.prototype.propertyIsEnumerable.call(e, i[n]) && (r[i[n]] = e[i[n]])
        }
        return r
    };
import {
    compact,
    isEmpty,
    keyBy,
    values
} from "lodash-es";
import * as api from "../api";
import {
    debouncePromise,
    makePromise as mp
} from "../util/make_promise";
import * as cache from "./request_cache";
var codeLocation = "action/partial_user",
    makePromise = mp(codeLocation);
export var getPartialUsersV2 = function(e, t) {
    return __awaiter(void 0, void 0, void 0, function() {
        var r, i = t.scopes,
            n = void 0 === i ? {} : i,
            a = t.attrs,
            s = void 0 === a ? [] : a,
            o = __rest(t, ["scopes", "attrs"]);
        return __generator(this, function(t) {
            return r = __assign(__assign({}, o), {
                vault: null === n || void 0 === n ? void 0 : n.vaultUuid,
                group: null === n || void 0 === n ? void 0 : n.groupUuid,
                attrs: s
            }), [2, debouncePromise([codeLocation, "getPartialUsersV2", e.id, JSON.stringify(r)], function() {
                return __awaiter(void 0, void 0, void 0, function() {
                    var t, i, n, a;
                    return __generator(this, function(s) {
                        switch (s.label) {
                            case 0:
                                return [4, api.getPartialUsers(e.session, r)];
                            case 1:
                                return t = s.sent(), i = t.serviceAccounts, n = void 0 === i ? [] : i, a = __rest(t, ["serviceAccounts"]), [2, __assign(__assign({}, a), {
                                    serviceAccounts: n
                                })]
                        }
                    })
                })
            })]
        })
    })
};
var partialUserCache = cache.create();
export function getPartialUsers(e, t, r) {
    return void 0 === t && (t = {}), void 0 === r && (r = {}), makePromise("getPartialUsers", function() {
        var i = __assign({
                mustReload: !1,
                limit: void 0
            }, r),
            n = i.mustReload,
            a = i.limit,
            s = !a && isEmpty(t);
        if (!n && s) {
            var o = partialUserCache.getAllEntries(e.id);
            if (o) return values(o)
        }
        var c = {
            attrs: [],
            emails: t.emails,
            states: compact([t.state]),
            types: compact([t.type]),
            limit: a,
            search: t.search
        };
        return debouncePromise([codeLocation, "getPartialUsers", e.id, JSON.stringify(c)], function() {
            return api.getPartialUsers(e.session, c).then(function(t) {
                var r = t.users;
                if (!r) throw new Error("Missing users from getPartialUsers");
                return s && (partialUserCache = partialUserCache.withOnlyEntries(e.id, keyBy(r, "uuid"), {
                    timestamp: Date.now()
                })), r
            })
        })
    })
};
export function getGroupUsersWithPermissions(e, t) {
    return makePromise("getGroupUsersWithPermissions", function() {
        return debouncePromise([codeLocation, "getGroupUsersWithPermissions", e.id, t], function() {
            return api.getPartialUsers(e.session, {
                group: t,
                attrs: ["combinedPermissions"]
            }).then(function(e) {
                var t = e.users,
                    r = e.serviceAccounts,
                    i = void 0 === r ? [] : r;
                if (!t && !i) throw new Error("Missing users.");
                return {
                    users: t,
                    serviceAccounts: i
                }
            })
        })
    })
};
export var clearPartialUserCache = function() {
    partialUserCache = cache.create()
};
export var clearPartialUserCacheForContext = function(e) {
    partialUserCache = partialUserCache.withoutContext(e.id)
};