"use strict";
var __createBinding = this && this.__createBinding || (Object.create ? function(e, r, t, o) {
        void 0 === o && (o = t), Object.defineProperty(e, o, {
            enumerable: !0,
            get: function() {
                return r[t]
            }
        })
    } : function(e, r, t, o) {
        void 0 === o && (o = t), e[o] = r[t]
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
    __awaiter = this && this.__awaiter || function(e, r, t, o) {
        return new(t || (t = Promise))(function(n, i) {
            function l(e) {
                try {
                    a(o.next(e))
                } catch (e) {
                    i(e)
                }
            }

            function u(e) {
                try {
                    a(o.throw(e))
                } catch (e) {
                    i(e)
                }
            }

            function a(e) {
                var r;
                e.done ? n(e.value) : (r = e.value, r instanceof t ? r : new t(function(e) {
                    e(r)
                })).then(l, u)
            }
            a((o = o.apply(e, r || [])).next())
        })
    },
    __generator = this && this.__generator || function(e, r) {
        var t, o, n, i, l = {
            label: 0,
            sent: function() {
                if (1 & n[0]) throw n[1];
                return n[1]
            },
            trys: [],
            ops: []
        };
        return i = {
            next: u(0),
            throw: u(1),
            return: u(2)
        }, "function" == typeof Symbol && (i[Symbol.iterator] = function() {
            return this
        }), i;

        function u(i) {
            return function(u) {
                return function(i) {
                    if (t) throw new TypeError("Generator is already executing.");
                    for (; l;) try {
                        if (t = 1, o && (n = 2 & i[0] ? o.return : i[0] ? o.throw || ((n = o.return) && n.call(o), 0) : o.next) && !(n = n.call(o, i[1])).done) return n;
                        switch (o = 0, n && (i = [2 & i[0], n.value]), i[0]) {
                            case 0:
                            case 1:
                                n = i;
                                break;
                            case 4:
                                return l.label++, {
                                    value: i[1],
                                    done: !1
                                };
                            case 5:
                                l.label++, o = i[1], i = [0];
                                continue;
                            case 7:
                                i = l.ops.pop(), l.trys.pop();
                                continue;
                            default:
                                if (!(n = (n = l.trys).length > 0 && n[n.length - 1]) && (6 === i[0] || 2 === i[0])) {
                                    l = 0;
                                    continue
                                }
                                if (3 === i[0] && (!n || i[1] > n[0] && i[1] < n[3])) {
                                    l.label = i[1];
                                    break
                                }
                                if (6 === i[0] && l.label < n[1]) {
                                    l.label = n[1], n = i;
                                    break
                                }
                                if (n && l.label < n[2]) {
                                    l.label = n[2], l.ops.push(i);
                                    break
                                }
                                n[2] && l.ops.pop(), l.trys.pop();
                                continue
                        }
                        i = r.call(e, l)
                    } catch (e) {
                        i = [6, e], o = 0
                    } finally {
                        t = n = 0
                    }
                    if (5 & i[0]) throw i[1];
                    return {
                        value: i[0] ? i[1] : void 0,
                        done: !0
                    }
                }([i, u])
            }
        }
    },
    __values = this && this.__values || function(e) {
        var r = "function" == typeof Symbol && Symbol.iterator,
            t = r && e[r],
            o = 0;
        if (t) return t.call(e);
        if (e && "number" == typeof e.length) return {
            next: function() {
                return e && o >= e.length && (e = void 0), {
                    value: e && e[o++],
                    done: !e
                }
            }
        };
        throw new TypeError(r ? "Object is not iterable." : "Symbol.iterator is not defined.")
    },
    __read = this && this.__read || function(e, r) {
        var t = "function" == typeof Symbol && e[Symbol.iterator];
        if (!t) return e;
        var o, n, i = t.call(e),
            l = [];
        try {
            for (;
                (void 0 === r || r-- > 0) && !(o = i.next()).done;) l.push(o.value)
        } catch (e) {
            n = {
                error: e
            }
        } finally {
            try {
                o && !o.done && (t = i.return) && t.call(i)
            } finally {
                if (n) throw n.error
            }
        }
        return l
    },
    __spread = this && this.__spread || function() {
        for (var e = [], r = 0; r < arguments.length; r++) e = e.concat(__read(arguments[r]));
        return e
    };
Object.defineProperty(exports, "__esModule", {
    value: !0
}), exports.parseFirewallRules = void 0;
var model = __importStar(require("../model")),
    make_promise_1 = require("../util/make_promise"),
    codeLocation = "parser/firewall_rules",
    makePromise = make_promise_1.makePromise(codeLocation),
    parseFirewallRules = function(e) {
        return __awaiter(void 0, void 0, void 0, function() {
            return __generator(this, function(r) {
                return [2, makePromise("parseFirewallRules", function() {
                    return __awaiter(void 0, void 0, void 0, function() {
                        var r, t, o, n, i, l, u, a, s, c, d, p, f, _, v, h, y, b, m, w, g, x;
                        return __generator(this, function(S) {
                            if (r = [], t = [], o = [], null === e.rules) return [2, {
                                globalRules: r,
                                groupRules: t
                            }];
                            try {
                                for (n = __values(e.rules), i = n.next(); !i.done; i = n.next())
                                    if (void 0 !== (l = i.value)) {
                                        if (u = {
                                                type: l.type,
                                                scope: l.scope,
                                                value: l.value,
                                                action: l.action
                                            }, l.scope && l.scope.length > 1) throw new Error("More firewall scopes than expected. Scope may only be either 'Global' or 'Group'");
                                        if (void 0 !== l.scope && (null === (p = l.scope[0]) || void 0 === p ? void 0 : p.type) !== model.FirewallRuleScopeType.Global) {
                                            if ((null === (f = l.scope[0]) || void 0 === f ? void 0 : f.type) === model.FirewallRuleScopeType.Group) {
                                                if (a = (null === (_ = o[0]) || void 0 === _ ? void 0 : _.scope) && (null === (h = null === (v = o[0]) || void 0 === v ? void 0 : v.scope[0]) || void 0 === h ? void 0 : h.uuid) ? null === (y = o[0].scope[0]) || void 0 === y ? void 0 : y.uuid : "", 0 === o.length) {
                                                    o.push(u);
                                                    continue
                                                }
                                                if ((null === (b = l.scope[0]) || void 0 === b ? void 0 : b.uuid) === a) {
                                                    o.push(u);
                                                    continue
                                                }
                                                s = {
                                                    rules: __spread(o),
                                                    groupUuid: a
                                                }, t.push(s), o.length = 0, o.push(u)
                                            }
                                        } else r.push(u)
                                    }
                            } catch (e) {
                                c = {
                                    error: e
                                }
                            } finally {
                                try {
                                    i && !i.done && (d = n.return) && d.call(n)
                                } finally {
                                    if (c) throw c.error
                                }
                            }
                            return 0 !== o.length && (s = {
                                rules: __spread(o),
                                groupUuid: (null === (m = o[0]) || void 0 === m ? void 0 : m.scope) && (null === (g = null === (w = o[0]) || void 0 === w ? void 0 : w.scope[0]) || void 0 === g ? void 0 : g.uuid) ? null === (x = o[0].scope[0]) || void 0 === x ? void 0 : x.uuid : ""
                            }, t.push(s)), [2, {
                                globalRules: r,
                                groupRules: t
                            }]
                        })
                    })
                })]
            })
        })
    };
exports.parseFirewallRules = parseFirewallRules;