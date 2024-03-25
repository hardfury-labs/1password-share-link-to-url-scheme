var __awaiter = this && this.__awaiter || function(e, r, o, t) {
        return new(o || (o = Promise))(function(n, i) {
            function l(e) {
                try {
                    a(t.next(e))
                } catch (e) {
                    i(e)
                }
            }

            function u(e) {
                try {
                    a(t.throw(e))
                } catch (e) {
                    i(e)
                }
            }

            function a(e) {
                var r;
                e.done ? n(e.value) : (r = e.value, r instanceof o ? r : new o(function(e) {
                    e(r)
                })).then(l, u)
            }
            a((t = t.apply(e, r || [])).next())
        })
    },
    __generator = this && this.__generator || function(e, r) {
        var o, t, n, i, l = {
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
                    if (o) throw new TypeError("Generator is already executing.");
                    for (; l;) try {
                        if (o = 1, t && (n = 2 & i[0] ? t.return : i[0] ? t.throw || ((n = t.return) && n.call(t), 0) : t.next) && !(n = n.call(t, i[1])).done) return n;
                        switch (t = 0, n && (i = [2 & i[0], n.value]), i[0]) {
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
                                l.label++, t = i[1], i = [0];
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
                        i = [6, e], t = 0
                    } finally {
                        o = n = 0
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
            o = r && e[r],
            t = 0;
        if (o) return o.call(e);
        if (e && "number" == typeof e.length) return {
            next: function() {
                return e && t >= e.length && (e = void 0), {
                    value: e && e[t++],
                    done: !e
                }
            }
        };
        throw new TypeError(r ? "Object is not iterable." : "Symbol.iterator is not defined.")
    },
    __read = this && this.__read || function(e, r) {
        var o = "function" == typeof Symbol && e[Symbol.iterator];
        if (!o) return e;
        var t, n, i = o.call(e),
            l = [];
        try {
            for (;
                (void 0 === r || r-- > 0) && !(t = i.next()).done;) l.push(t.value)
        } catch (e) {
            n = {
                error: e
            }
        } finally {
            try {
                t && !t.done && (o = i.return) && o.call(i)
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
import * as model from "../model";
import {
    makePromise as mp
} from "../util/make_promise";
var codeLocation = "parser/firewall_rules",
    makePromise = mp(codeLocation);
export var parseFirewallRules = function(e) {
    return __awaiter(void 0, void 0, void 0, function() {
        return __generator(this, function(r) {
            return [2, makePromise("parseFirewallRules", function() {
                return __awaiter(void 0, void 0, void 0, function() {
                    var r, o, t, n, i, l, u, a, s, c, p, d, f, v, h, y, _, m, b, w, g, x;
                    return __generator(this, function(S) {
                        if (r = [], o = [], t = [], null === e.rules) return [2, {
                            globalRules: r,
                            groupRules: o
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
                                    if (void 0 !== l.scope && (null === (d = l.scope[0]) || void 0 === d ? void 0 : d.type) !== model.FirewallRuleScopeType.Global) {
                                        if ((null === (f = l.scope[0]) || void 0 === f ? void 0 : f.type) === model.FirewallRuleScopeType.Group) {
                                            if (a = (null === (v = t[0]) || void 0 === v ? void 0 : v.scope) && (null === (y = null === (h = t[0]) || void 0 === h ? void 0 : h.scope[0]) || void 0 === y ? void 0 : y.uuid) ? null === (_ = t[0].scope[0]) || void 0 === _ ? void 0 : _.uuid : "", 0 === t.length) {
                                                t.push(u);
                                                continue
                                            }
                                            if ((null === (m = l.scope[0]) || void 0 === m ? void 0 : m.uuid) === a) {
                                                t.push(u);
                                                continue
                                            }
                                            s = {
                                                rules: __spread(t),
                                                groupUuid: a
                                            }, o.push(s), t.length = 0, t.push(u)
                                        }
                                    } else r.push(u)
                                }
                        } catch (e) {
                            c = {
                                error: e
                            }
                        } finally {
                            try {
                                i && !i.done && (p = n.return) && p.call(n)
                            } finally {
                                if (c) throw c.error
                            }
                        }
                        return 0 !== t.length && (s = {
                            rules: __spread(t),
                            groupUuid: (null === (b = t[0]) || void 0 === b ? void 0 : b.scope) && (null === (g = null === (w = t[0]) || void 0 === w ? void 0 : w.scope[0]) || void 0 === g ? void 0 : g.uuid) ? null === (x = t[0].scope[0]) || void 0 === x ? void 0 : x.uuid : ""
                        }, o.push(s)), [2, {
                            globalRules: r,
                            groupRules: o
                        }]
                    })
                })
            })]
        })
    })
};