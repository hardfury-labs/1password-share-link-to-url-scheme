var __awaiter = this && this.__awaiter || function(e, t, r, n) {
        return new(r || (r = Promise))(function(o, a) {
            function i(e) {
                try {
                    u(n.next(e))
                } catch (e) {
                    a(e)
                }
            }

            function l(e) {
                try {
                    u(n.throw(e))
                } catch (e) {
                    a(e)
                }
            }

            function u(e) {
                var t;
                e.done ? o(e.value) : (t = e.value, t instanceof r ? t : new r(function(e) {
                    e(t)
                })).then(i, l)
            }
            u((n = n.apply(e, t || [])).next())
        })
    },
    __generator = this && this.__generator || function(e, t) {
        var r, n, o, a, i = {
            label: 0,
            sent: function() {
                if (1 & o[0]) throw o[1];
                return o[1]
            },
            trys: [],
            ops: []
        };
        return a = {
            next: l(0),
            throw: l(1),
            return: l(2)
        }, "function" == typeof Symbol && (a[Symbol.iterator] = function() {
            return this
        }), a;

        function l(a) {
            return function(l) {
                return function(a) {
                    if (r) throw new TypeError("Generator is already executing.");
                    for (; i;) try {
                        if (r = 1, n && (o = 2 & a[0] ? n.return : a[0] ? n.throw || ((o = n.return) && o.call(n), 0) : n.next) && !(o = o.call(n, a[1])).done) return o;
                        switch (n = 0, o && (a = [2 & a[0], o.value]), a[0]) {
                            case 0:
                            case 1:
                                o = a;
                                break;
                            case 4:
                                return i.label++, {
                                    value: a[1],
                                    done: !1
                                };
                            case 5:
                                i.label++, n = a[1], a = [0];
                                continue;
                            case 7:
                                a = i.ops.pop(), i.trys.pop();
                                continue;
                            default:
                                if (!(o = (o = i.trys).length > 0 && o[o.length - 1]) && (6 === a[0] || 2 === a[0])) {
                                    i = 0;
                                    continue
                                }
                                if (3 === a[0] && (!o || a[1] > o[0] && a[1] < o[3])) {
                                    i.label = a[1];
                                    break
                                }
                                if (6 === a[0] && i.label < o[1]) {
                                    i.label = o[1], o = a;
                                    break
                                }
                                if (o && i.label < o[2]) {
                                    i.label = o[2], i.ops.push(a);
                                    break
                                }
                                o[2] && i.ops.pop(), i.trys.pop();
                                continue
                        }
                        a = t.call(e, i)
                    } catch (e) {
                        a = [6, e], n = 0
                    } finally {
                        r = o = 0
                    }
                    if (5 & a[0]) throw a[1];
                    return {
                        value: a[0] ? a[1] : void 0,
                        done: !0
                    }
                }([a, l])
            }
        }
    },
    __read = this && this.__read || function(e, t) {
        var r = "function" == typeof Symbol && e[Symbol.iterator];
        if (!r) return e;
        var n, o, a = r.call(e),
            i = [];
        try {
            for (;
                (void 0 === t || t-- > 0) && !(n = a.next()).done;) i.push(n.value)
        } catch (e) {
            o = {
                error: e
            }
        } finally {
            try {
                n && !n.done && (r = a.return) && r.call(a)
            } finally {
                if (o) throw o.error
            }
        }
        return i
    };
import * as model from "../../../../model";
import {
    VaultItem
} from "../../../../model";
import {
    generateUUID
} from "../../../../util";
import {
    getTemplates
} from "../../../vault_item_template";
export var createLoginItems = function(e, t, r) {
    return __awaiter(void 0, void 0, void 0, function() {
        return __generator(this, function(n) {
            return [2, getTemplates(e).then(function(e) {
                var n = e.find(function(e) {
                    return e.uuid === model.VaultItemTemplate.LoginUuid
                });
                return t.map(function(e) {
                    var t = new VaultItem(r),
                        o = __read(e, 5),
                        a = o[0],
                        i = o[1],
                        l = o[2],
                        u = o[3],
                        c = o[4];
                    if (t.templateUuid = model.VaultItemTemplate.LoginUuid, t.title = a || n.singularName, i && (t.url = i), l && t.setUsername(l), u && t.setPassword(u), c) {
                        var f = [],
                            s = {
                                k: VaultItem.FieldType.Concealed,
                                n: VaultItem.TOTP_PREFIX + generateUUID(),
                                v: c,
                                t: "one-time password"
                            },
                            m = {
                                name: generateUUID(),
                                title: "",
                                fields: [s]
                            };
                        f.push(m), t.details.sections = f
                    }
                    return t
                })
            }).catch(function(e) {
                throw e
            })]
        })
    })
};