"use strict";
var __createBinding = this && this.__createBinding || (Object.create ? function(e, t, r, n) {
        void 0 === n && (n = r), Object.defineProperty(e, n, {
            enumerable: !0,
            get: function() {
                return t[r]
            }
        })
    } : function(e, t, r, n) {
        void 0 === n && (n = r), e[n] = t[r]
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
    __awaiter = this && this.__awaiter || function(e, t, r, n) {
        return new(r || (r = Promise))(function(a, o) {
            function i(e) {
                try {
                    l(n.next(e))
                } catch (e) {
                    o(e)
                }
            }

            function u(e) {
                try {
                    l(n.throw(e))
                } catch (e) {
                    o(e)
                }
            }

            function l(e) {
                var t;
                e.done ? a(e.value) : (t = e.value, t instanceof r ? t : new r(function(e) {
                    e(t)
                })).then(i, u)
            }
            l((n = n.apply(e, t || [])).next())
        })
    },
    __generator = this && this.__generator || function(e, t) {
        var r, n, a, o, i = {
            label: 0,
            sent: function() {
                if (1 & a[0]) throw a[1];
                return a[1]
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
                    if (r) throw new TypeError("Generator is already executing.");
                    for (; i;) try {
                        if (r = 1, n && (a = 2 & o[0] ? n.return : o[0] ? n.throw || ((a = n.return) && a.call(n), 0) : n.next) && !(a = a.call(n, o[1])).done) return a;
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
                        o = t.call(e, i)
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
                }([o, u])
            }
        }
    },
    __read = this && this.__read || function(e, t) {
        var r = "function" == typeof Symbol && e[Symbol.iterator];
        if (!r) return e;
        var n, a, o = r.call(e),
            i = [];
        try {
            for (;
                (void 0 === t || t-- > 0) && !(n = o.next()).done;) i.push(n.value)
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
        return i
    };
Object.defineProperty(exports, "__esModule", {
    value: !0
}), exports.updateSpecialVaultDescriptions = void 0;
var model = __importStar(require("../../model")),
    vault_1 = require("../vault"),
    updateSpecialVaultDescriptions = function(e) {
        return __awaiter(void 0, void 0, void 0, function() {
            var t, r, n, a, o, i, u, l, c, s, d, f;
            return __generator(this, function(p) {
                switch (p.label) {
                    case 0:
                        return t = new Date(2017, 4, 10), r = (null === (s = e.account) || void 0 === s ? void 0 : s.createdAt) || new Date, n = (null === (d = e.user) || void 0 === d ? void 0 : d.createdAt) || new Date, r > t ? [2] : [4, Promise.all([n < t ? vault_1.getPersonalVault(e) : Promise.resolve(void 0), (null === (f = e.user) || void 0 === f ? void 0 : f.hasPermission(model.Permission.ViewAdminConsole)) ? vault_1.getEveryoneVault(e) : Promise.resolve(void 0)])];
                    case 1:
                        return a = __read.apply(void 0, [p.sent(), 2]), o = a[0], i = a[1], u = o && o.desc !== model.Vault.DefaultDescMarker, l = i && e.user && e.user.canManageVault(i) && i.desc !== model.Vault.DefaultDescMarker, u || l ? (c = [], o && u && (o.desc = model.Vault.DefaultDescMarker, c.push(vault_1.updateVault(e, o))), i && l && (i.desc = model.Vault.DefaultDescMarker, c.push(vault_1.updateVault(e, i))), [2, Promise.all(c).then(function() {})]) : [2]
                }
            })
        })
    };
exports.updateSpecialVaultDescriptions = updateSpecialVaultDescriptions;