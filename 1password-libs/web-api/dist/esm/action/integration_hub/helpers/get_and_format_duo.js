var __awaiter = this && this.__awaiter || function(e, t, n, r) {
        return new(n || (n = Promise))(function(o, i) {
            function a(e) {
                try {
                    c(r.next(e))
                } catch (e) {
                    i(e)
                }
            }

            function u(e) {
                try {
                    c(r.throw(e))
                } catch (e) {
                    i(e)
                }
            }

            function c(e) {
                var t;
                e.done ? o(e.value) : (t = e.value, t instanceof n ? t : new n(function(e) {
                    e(t)
                })).then(a, u)
            }
            c((r = r.apply(e, t || [])).next())
        })
    },
    __generator = this && this.__generator || function(e, t) {
        var n, r, o, i, a = {
            label: 0,
            sent: function() {
                if (1 & o[0]) throw o[1];
                return o[1]
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
                    if (n) throw new TypeError("Generator is already executing.");
                    for (; a;) try {
                        if (n = 1, r && (o = 2 & i[0] ? r.return : i[0] ? r.throw || ((o = r.return) && o.call(r), 0) : r.next) && !(o = o.call(r, i[1])).done) return o;
                        switch (r = 0, o && (i = [2 & i[0], o.value]), i[0]) {
                            case 0:
                            case 1:
                                o = i;
                                break;
                            case 4:
                                return a.label++, {
                                    value: i[1],
                                    done: !1
                                };
                            case 5:
                                a.label++, r = i[1], i = [0];
                                continue;
                            case 7:
                                i = a.ops.pop(), a.trys.pop();
                                continue;
                            default:
                                if (!(o = (o = a.trys).length > 0 && o[o.length - 1]) && (6 === i[0] || 2 === i[0])) {
                                    a = 0;
                                    continue
                                }
                                if (3 === i[0] && (!o || i[1] > o[0] && i[1] < o[3])) {
                                    a.label = i[1];
                                    break
                                }
                                if (6 === i[0] && a.label < o[1]) {
                                    a.label = o[1], o = i;
                                    break
                                }
                                if (o && a.label < o[2]) {
                                    a.label = o[2], a.ops.push(i);
                                    break
                                }
                                o[2] && a.ops.pop(), a.trys.pop();
                                continue
                        }
                        i = t.call(e, a)
                    } catch (e) {
                        i = [6, e], r = 0
                    } finally {
                        n = o = 0
                    }
                    if (5 & i[0]) throw i[1];
                    return {
                        value: i[0] ? i[1] : void 0,
                        done: !0
                    }
                }([i, u])
            }
        }
    };
import {
    ServiceAccountType
} from "../../../api";
import {
    Permission
} from "../../../model";
import {
    buildSummaryObject
} from "./summary";
export var getAndFormatDuo = function(e) {
    return __awaiter(void 0, void 0, void 0, function() {
        var t, n, r, o, i;
        return __generator(this, function(a) {
            switch (a.label) {
                case 0:
                    return t = null === (o = e.account) || void 0 === o ? void 0 : o.settings, n = null === (i = e.user) || void 0 === i ? void 0 : i.hasPermission(Permission.ChangeTeamSettings), (null === t || void 0 === t ? void 0 : t.duo.isEnabled) && n ? (r = {
                        type: "S",
                        uuid: "",
                        name: "Duo",
                        createdAt: "",
                        state: "",
                        creatorUuid: "",
                        serviceAccountType: ServiceAccountType.Duo,
                        email: "",
                        avatar: ""
                    }, [4, buildSummaryObject({
                        type: ServiceAccountType.Duo,
                        CTX: e
                    })]) : [2];
                case 1:
                    return [2, (r.summary = a.sent(), r)]
            }
        })
    })
};