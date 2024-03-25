"use strict";
var __assign = this && this.__assign || function() {
        return (__assign = Object.assign || function(e) {
            for (var r, t = 1, i = arguments.length; t < i; t++)
                for (var s in r = arguments[t]) Object.prototype.hasOwnProperty.call(r, s) && (e[s] = r[s]);
            return e
        }).apply(this, arguments)
    },
    __createBinding = this && this.__createBinding || (Object.create ? function(e, r, t, i) {
        void 0 === i && (i = t), Object.defineProperty(e, i, {
            enumerable: !0,
            get: function() {
                return r[t]
            }
        })
    } : function(e, r, t, i) {
        void 0 === i && (i = t), e[i] = r[t]
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
    __awaiter = this && this.__awaiter || function(e, r, t, i) {
        return new(t || (t = Promise))(function(s, a) {
            function o(e) {
                try {
                    c(i.next(e))
                } catch (e) {
                    a(e)
                }
            }

            function n(e) {
                try {
                    c(i.throw(e))
                } catch (e) {
                    a(e)
                }
            }

            function c(e) {
                var r;
                e.done ? s(e.value) : (r = e.value, r instanceof t ? r : new t(function(e) {
                    e(r)
                })).then(o, n)
            }
            c((i = i.apply(e, r || [])).next())
        })
    },
    __generator = this && this.__generator || function(e, r) {
        var t, i, s, a, o = {
            label: 0,
            sent: function() {
                if (1 & s[0]) throw s[1];
                return s[1]
            },
            trys: [],
            ops: []
        };
        return a = {
            next: n(0),
            throw: n(1),
            return: n(2)
        }, "function" == typeof Symbol && (a[Symbol.iterator] = function() {
            return this
        }), a;

        function n(a) {
            return function(n) {
                return function(a) {
                    if (t) throw new TypeError("Generator is already executing.");
                    for (; o;) try {
                        if (t = 1, i && (s = 2 & a[0] ? i.return : a[0] ? i.throw || ((s = i.return) && s.call(i), 0) : i.next) && !(s = s.call(i, a[1])).done) return s;
                        switch (i = 0, s && (a = [2 & a[0], s.value]), a[0]) {
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
                                o.label++, i = a[1], a = [0];
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
                        a = r.call(e, o)
                    } catch (e) {
                        a = [6, e], i = 0
                    } finally {
                        t = s = 0
                    }
                    if (5 & a[0]) throw a[1];
                    return {
                        value: a[0] ? a[1] : void 0,
                        done: !0
                    }
                }([a, n])
            }
        }
    },
    __rest = this && this.__rest || function(e, r) {
        var t = {};
        for (var i in e) Object.prototype.hasOwnProperty.call(e, i) && r.indexOf(i) < 0 && (t[i] = e[i]);
        if (null != e && "function" == typeof Object.getOwnPropertySymbols) {
            var s = 0;
            for (i = Object.getOwnPropertySymbols(e); s < i.length; s++) r.indexOf(i[s]) < 0 && Object.prototype.propertyIsEnumerable.call(e, i[s]) && (t[i[s]] = e[i[s]])
        }
        return t
    };
Object.defineProperty(exports, "__esModule", {
    value: !0
}), exports.clearPartialUserCacheForContext = exports.clearPartialUserCache = exports.getGroupUsersWithPermissions = exports.getPartialUsers = exports.getPartialUsersV2 = void 0;
var lodash_es_1 = require("lodash-es"),
    api = __importStar(require("../api")),
    make_promise_1 = require("../util/make_promise"),
    cache = __importStar(require("./request_cache")),
    codeLocation = "action/partial_user",
    makePromise = make_promise_1.makePromise(codeLocation),
    getPartialUsersV2 = function(e, r) {
        return __awaiter(void 0, void 0, void 0, function() {
            var t, i = r.scopes,
                s = void 0 === i ? {} : i,
                a = r.attrs,
                o = void 0 === a ? [] : a,
                n = __rest(r, ["scopes", "attrs"]);
            return __generator(this, function(r) {
                return t = __assign(__assign({}, n), {
                    vault: null === s || void 0 === s ? void 0 : s.vaultUuid,
                    group: null === s || void 0 === s ? void 0 : s.groupUuid,
                    attrs: o
                }), [2, make_promise_1.debouncePromise([codeLocation, "getPartialUsersV2", e.id, JSON.stringify(t)], function() {
                    return __awaiter(void 0, void 0, void 0, function() {
                        var r, i, s, a;
                        return __generator(this, function(o) {
                            switch (o.label) {
                                case 0:
                                    return [4, api.getPartialUsers(e.session, t)];
                                case 1:
                                    return r = o.sent(), i = r.serviceAccounts, s = void 0 === i ? [] : i, a = __rest(r, ["serviceAccounts"]), [2, __assign(__assign({}, a), {
                                        serviceAccounts: s
                                    })]
                            }
                        })
                    })
                })]
            })
        })
    };
exports.getPartialUsersV2 = getPartialUsersV2;
var partialUserCache = cache.create();

function getPartialUsers(e, r, t) {
    return void 0 === r && (r = {}), void 0 === t && (t = {}), makePromise("getPartialUsers", function() {
        var i = __assign({
                mustReload: !1,
                limit: void 0
            }, t),
            s = i.mustReload,
            a = i.limit,
            o = !a && lodash_es_1.isEmpty(r);
        if (!s && o) {
            var n = partialUserCache.getAllEntries(e.id);
            if (n) return lodash_es_1.values(n)
        }
        var c = {
            attrs: [],
            emails: r.emails,
            states: lodash_es_1.compact([r.state]),
            types: lodash_es_1.compact([r.type]),
            limit: a,
            search: r.search
        };
        return make_promise_1.debouncePromise([codeLocation, "getPartialUsers", e.id, JSON.stringify(c)], function() {
            return api.getPartialUsers(e.session, c).then(function(r) {
                var t = r.users;
                if (!t) throw new Error("Missing users from getPartialUsers");
                return o && (partialUserCache = partialUserCache.withOnlyEntries(e.id, lodash_es_1.keyBy(t, "uuid"), {
                    timestamp: Date.now()
                })), t
            })
        })
    })
}

function getGroupUsersWithPermissions(e, r) {
    return makePromise("getGroupUsersWithPermissions", function() {
        return make_promise_1.debouncePromise([codeLocation, "getGroupUsersWithPermissions", e.id, r], function() {
            return api.getPartialUsers(e.session, {
                group: r,
                attrs: ["combinedPermissions"]
            }).then(function(e) {
                var r = e.users,
                    t = e.serviceAccounts,
                    i = void 0 === t ? [] : t;
                if (!r && !i) throw new Error("Missing users.");
                return {
                    users: r,
                    serviceAccounts: i
                }
            })
        })
    })
}
exports.getPartialUsers = getPartialUsers, exports.getGroupUsersWithPermissions = getGroupUsersWithPermissions;
var clearPartialUserCache = function() {
    partialUserCache = cache.create()
};
exports.clearPartialUserCache = clearPartialUserCache;
var clearPartialUserCacheForContext = function(e) {
    partialUserCache = partialUserCache.withoutContext(e.id)
};
exports.clearPartialUserCacheForContext = clearPartialUserCacheForContext;