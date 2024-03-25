"use strict";
var __createBinding = this && this.__createBinding || (Object.create ? function(t, e, n, r) {
        void 0 === r && (r = n), Object.defineProperty(t, r, {
            enumerable: !0,
            get: function() {
                return e[n]
            }
        })
    } : function(t, e, n, r) {
        void 0 === r && (r = n), t[r] = e[n]
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
            for (var n in t) "default" !== n && Object.prototype.hasOwnProperty.call(t, n) && __createBinding(e, t, n);
        return __setModuleDefault(e, t), e
    },
    __awaiter = this && this.__awaiter || function(t, e, n, r) {
        return new(n || (n = Promise))(function(i, o) {
            function a(t) {
                try {
                    s(r.next(t))
                } catch (t) {
                    o(t)
                }
            }

            function u(t) {
                try {
                    s(r.throw(t))
                } catch (t) {
                    o(t)
                }
            }

            function s(t) {
                var e;
                t.done ? i(t.value) : (e = t.value, e instanceof n ? e : new n(function(t) {
                    t(e)
                })).then(a, u)
            }
            s((r = r.apply(t, e || [])).next())
        })
    },
    __generator = this && this.__generator || function(t, e) {
        var n, r, i, o, a = {
            label: 0,
            sent: function() {
                if (1 & i[0]) throw i[1];
                return i[1]
            },
            trys: [],
            ops: []
        };
        return o = {
            next: u(0),
            throw: u(1),
            return: u(2)
        }, "function" == typeof Symbol && (o[Symbol.iterator] = function() {
            return this
        }), o;

        function u(o) {
            return function(u) {
                return function(o) {
                    if (n) throw new TypeError("Generator is already executing.");
                    for (; a;) try {
                        if (n = 1, r && (i = 2 & o[0] ? r.return : o[0] ? r.throw || ((i = r.return) && i.call(r), 0) : r.next) && !(i = i.call(r, o[1])).done) return i;
                        switch (r = 0, i && (o = [2 & o[0], i.value]), o[0]) {
                            case 0:
                            case 1:
                                i = o;
                                break;
                            case 4:
                                return a.label++, {
                                    value: o[1],
                                    done: !1
                                };
                            case 5:
                                a.label++, r = o[1], o = [0];
                                continue;
                            case 7:
                                o = a.ops.pop(), a.trys.pop();
                                continue;
                            default:
                                if (!(i = (i = a.trys).length > 0 && i[i.length - 1]) && (6 === o[0] || 2 === o[0])) {
                                    a = 0;
                                    continue
                                }
                                if (3 === o[0] && (!i || o[1] > i[0] && o[1] < i[3])) {
                                    a.label = o[1];
                                    break
                                }
                                if (6 === o[0] && a.label < i[1]) {
                                    a.label = i[1], i = o;
                                    break
                                }
                                if (i && a.label < i[2]) {
                                    a.label = i[2], a.ops.push(o);
                                    break
                                }
                                i[2] && a.ops.pop(), a.trys.pop();
                                continue
                        }
                        o = e.call(t, a)
                    } catch (t) {
                        o = [6, t], r = 0
                    } finally {
                        n = i = 0
                    }
                    if (5 & o[0]) throw o[1];
                    return {
                        value: o[0] ? o[1] : void 0,
                        done: !0
                    }
                }([o, u])
            }
        }
    };
Object.defineProperty(exports, "__esModule", {
    value: !0
}), exports.updateEmailSubscriptions = exports.getEmailSubscriptions = void 0;
var t = __importStar(require("io-ts")),
    util_1 = require("../util"),
    GetEmailSubscriptionsResponse = t.readonly(t.type({
        subscriptions: t.type({
            newsletter: t.boolean,
            events: t.boolean,
            content: t.boolean,
            announcements: t.boolean,
            unsubscribed: t.boolean
        })
    }), "GetEmailSubscriptionsResponse"),
    getEmailSubscriptions = function(t) {
        return __awaiter(void 0, void 0, void 0, function() {
            return __generator(this, function(e) {
                return [2, t.get("/api/v1/emailsubscriptions").then(util_1.unsafeDecodeAs(GetEmailSubscriptionsResponse))]
            })
        })
    };
exports.getEmailSubscriptions = getEmailSubscriptions;
var updateEmailSubscriptions = function(t, e) {
    return __awaiter(void 0, void 0, void 0, function() {
        return __generator(this, function(n) {
            switch (n.label) {
                case 0:
                    return [4, t.put("/api/v1/emailsubscriptions", e)];
                case 1:
                    return n.sent(), [2]
            }
        })
    })
};
exports.updateEmailSubscriptions = updateEmailSubscriptions;