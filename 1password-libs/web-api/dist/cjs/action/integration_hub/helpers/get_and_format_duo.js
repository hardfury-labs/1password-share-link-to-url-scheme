"use strict";
var __awaiter = this && this.__awaiter || function(e, t, r, n) {
        return new(r || (r = Promise))(function(o, a) {
            function i(e) {
                try {
                    c(n.next(e))
                } catch (e) {
                    a(e)
                }
            }

            function u(e) {
                try {
                    c(n.throw(e))
                } catch (e) {
                    a(e)
                }
            }

            function c(e) {
                var t;
                e.done ? o(e.value) : (t = e.value, t instanceof r ? t : new r(function(e) {
                    e(t)
                })).then(i, u)
            }
            c((n = n.apply(e, t || [])).next())
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
            next: u(0),
            throw: u(1),
            return: u(2)
        }, "function" == typeof Symbol && (a[Symbol.iterator] = function() {
            return this
        }), a;

        function u(a) {
            return function(u) {
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
                }([a, u])
            }
        }
    };
Object.defineProperty(exports, "__esModule", {
    value: !0
}), exports.getAndFormatDuo = void 0;
var api_1 = require("../../../api"),
    model_1 = require("../../../model"),
    summary_1 = require("./summary"),
    getAndFormatDuo = function(e) {
        return __awaiter(void 0, void 0, void 0, function() {
            var t, r, n, o, a;
            return __generator(this, function(i) {
                switch (i.label) {
                    case 0:
                        return t = null === (o = e.account) || void 0 === o ? void 0 : o.settings, r = null === (a = e.user) || void 0 === a ? void 0 : a.hasPermission(model_1.Permission.ChangeTeamSettings), (null === t || void 0 === t ? void 0 : t.duo.isEnabled) && r ? (n = {
                            type: "S",
                            uuid: "",
                            name: "Duo",
                            createdAt: "",
                            state: "",
                            creatorUuid: "",
                            serviceAccountType: api_1.ServiceAccountType.Duo,
                            email: "",
                            avatar: ""
                        }, [4, summary_1.buildSummaryObject({
                            type: api_1.ServiceAccountType.Duo,
                            CTX: e
                        })]) : [2];
                    case 1:
                        return [2, (n.summary = i.sent(), n)]
                }
            })
        })
    };
exports.getAndFormatDuo = getAndFormatDuo;