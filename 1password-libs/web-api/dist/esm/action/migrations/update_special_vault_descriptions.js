var __awaiter = this && this.__awaiter || function(e, t, r, n) {
        return new(r || (r = Promise))(function(a, o) {
            function l(e) {
                try {
                    u(n.next(e))
                } catch (e) {
                    o(e)
                }
            }

            function i(e) {
                try {
                    u(n.throw(e))
                } catch (e) {
                    o(e)
                }
            }

            function u(e) {
                var t;
                e.done ? a(e.value) : (t = e.value, t instanceof r ? t : new r(function(e) {
                    e(t)
                })).then(l, i)
            }
            u((n = n.apply(e, t || [])).next())
        })
    },
    __generator = this && this.__generator || function(e, t) {
        var r, n, a, o, l = {
            label: 0,
            sent: function() {
                if (1 & a[0]) throw a[1];
                return a[1]
            },
            trys: [],
            ops: []
        };
        return o = {
            next: i(0),
            throw: i(1),
            return: i(2)
        }, "function" == typeof Symbol && (o[Symbol.iterator] = function() {
            return this
        }), o;

        function i(o) {
            return function(i) {
                return function(o) {
                    if (r) throw new TypeError("Generator is already executing.");
                    for (; l;) try {
                        if (r = 1, n && (a = 2 & o[0] ? n.return : o[0] ? n.throw || ((a = n.return) && a.call(n), 0) : n.next) && !(a = a.call(n, o[1])).done) return a;
                        switch (n = 0, a && (o = [2 & o[0], a.value]), o[0]) {
                            case 0:
                            case 1:
                                a = o;
                                break;
                            case 4:
                                return l.label++, {
                                    value: o[1],
                                    done: !1
                                };
                            case 5:
                                l.label++, n = o[1], o = [0];
                                continue;
                            case 7:
                                o = l.ops.pop(), l.trys.pop();
                                continue;
                            default:
                                if (!(a = (a = l.trys).length > 0 && a[a.length - 1]) && (6 === o[0] || 2 === o[0])) {
                                    l = 0;
                                    continue
                                }
                                if (3 === o[0] && (!a || o[1] > a[0] && o[1] < a[3])) {
                                    l.label = o[1];
                                    break
                                }
                                if (6 === o[0] && l.label < a[1]) {
                                    l.label = a[1], a = o;
                                    break
                                }
                                if (a && l.label < a[2]) {
                                    l.label = a[2], l.ops.push(o);
                                    break
                                }
                                a[2] && l.ops.pop(), l.trys.pop();
                                continue
                        }
                        o = t.call(e, l)
                    } catch (e) {
                        o = [6, e], n = 0
                    } finally {
                        r = a = 0
                    }
                    if (5 & o[0]) throw o[1];
                    return {
                        value: o[0] ? o[1] : void 0,
                        done: !0
                    }
                }([o, i])
            }
        }
    },
    __read = this && this.__read || function(e, t) {
        var r = "function" == typeof Symbol && e[Symbol.iterator];
        if (!r) return e;
        var n, a, o = r.call(e),
            l = [];
        try {
            for (;
                (void 0 === t || t-- > 0) && !(n = o.next()).done;) l.push(n.value)
        } catch (e) {
            a = {
                error: e
            }
        } finally {
            try {
                n && !n.done && (r = o.return) && r.call(o)
            } finally {
                if (a) throw a.error
            }
        }
        return l
    };
import * as model from "../../model";
import {
    getEveryoneVault,
    getPersonalVault,
    updateVault
} from "../vault";
export var updateSpecialVaultDescriptions = function(e) {
    return __awaiter(void 0, void 0, void 0, function() {
        var t, r, n, a, o, l, i, u, s, c, f, d;
        return __generator(this, function(p) {
            switch (p.label) {
                case 0:
                    return t = new Date(2017, 4, 10), r = (null === (c = e.account) || void 0 === c ? void 0 : c.createdAt) || new Date, n = (null === (f = e.user) || void 0 === f ? void 0 : f.createdAt) || new Date, r > t ? [2] : [4, Promise.all([n < t ? getPersonalVault(e) : Promise.resolve(void 0), (null === (d = e.user) || void 0 === d ? void 0 : d.hasPermission(model.Permission.ViewAdminConsole)) ? getEveryoneVault(e) : Promise.resolve(void 0)])];
                case 1:
                    return a = __read.apply(void 0, [p.sent(), 2]), o = a[0], l = a[1], i = o && o.desc !== model.Vault.DefaultDescMarker, u = l && e.user && e.user.canManageVault(l) && l.desc !== model.Vault.DefaultDescMarker, i || u ? (s = [], o && i && (o.desc = model.Vault.DefaultDescMarker, s.push(updateVault(e, o))), l && u && (l.desc = model.Vault.DefaultDescMarker, s.push(updateVault(e, l))), [2, Promise.all(s).then(function() {})]) : [2]
            }
        })
    })
};