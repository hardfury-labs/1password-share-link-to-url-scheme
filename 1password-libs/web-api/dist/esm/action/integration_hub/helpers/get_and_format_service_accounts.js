var __assign = this && this.__assign || function() {
        return (__assign = Object.assign || function(e) {
            for (var t, r = 1, n = arguments.length; r < n; r++)
                for (var i in t = arguments[r]) Object.prototype.hasOwnProperty.call(t, i) && (e[i] = t[i]);
            return e
        }).apply(this, arguments)
    },
    __awaiter = this && this.__awaiter || function(e, t, r, n) {
        return new(r || (r = Promise))(function(i, o) {
            function c(e) {
                try {
                    s(n.next(e))
                } catch (e) {
                    o(e)
                }
            }

            function a(e) {
                try {
                    s(n.throw(e))
                } catch (e) {
                    o(e)
                }
            }

            function s(e) {
                var t;
                e.done ? i(e.value) : (t = e.value, t instanceof r ? t : new r(function(e) {
                    e(t)
                })).then(c, a)
            }
            s((n = n.apply(e, t || [])).next())
        })
    },
    __generator = this && this.__generator || function(e, t) {
        var r, n, i, o, c = {
            label: 0,
            sent: function() {
                if (1 & i[0]) throw i[1];
                return i[1]
            },
            trys: [],
            ops: []
        };
        return o = {
            next: a(0),
            throw: a(1),
            return: a(2)
        }, "function" == typeof Symbol && (o[Symbol.iterator] = function() {
            return this
        }), o;

        function a(o) {
            return function(a) {
                return function(o) {
                    if (r) throw new TypeError("Generator is already executing.");
                    for (; c;) try {
                        if (r = 1, n && (i = 2 & o[0] ? n.return : o[0] ? n.throw || ((i = n.return) && i.call(n), 0) : n.next) && !(i = i.call(n, o[1])).done) return i;
                        switch (n = 0, i && (o = [2 & o[0], i.value]), o[0]) {
                            case 0:
                            case 1:
                                i = o;
                                break;
                            case 4:
                                return c.label++, {
                                    value: o[1],
                                    done: !1
                                };
                            case 5:
                                c.label++, n = o[1], o = [0];
                                continue;
                            case 7:
                                o = c.ops.pop(), c.trys.pop();
                                continue;
                            default:
                                if (!(i = (i = c.trys).length > 0 && i[i.length - 1]) && (6 === o[0] || 2 === o[0])) {
                                    c = 0;
                                    continue
                                }
                                if (3 === o[0] && (!i || o[1] > i[0] && o[1] < i[3])) {
                                    c.label = o[1];
                                    break
                                }
                                if (6 === o[0] && c.label < i[1]) {
                                    c.label = i[1], i = o;
                                    break
                                }
                                if (i && c.label < i[2]) {
                                    c.label = i[2], c.ops.push(o);
                                    break
                                }
                                i[2] && c.ops.pop(), c.trys.pop();
                                continue
                        }
                        o = t.call(e, c)
                    } catch (e) {
                        o = [6, e], n = 0
                    } finally {
                        r = i = 0
                    }
                    if (5 & o[0]) throw o[1];
                    return {
                        value: o[0] ? o[1] : void 0,
                        done: !0
                    }
                }([o, a])
            }
        }
    };
import * as api from "../../../api";
import {
    compare
} from "../../../util";
import {
    getIntegrations
} from "../../serviceaccounts";
import {
    getVaults
} from "../../vault";
import {
    buildSummaryObject
} from "./summary";
export var getAndFormatServiceAccounts = function(e) {
    return __awaiter(void 0, void 0, void 0, function() {
        var t, r, n, i, o;
        return __generator(this, function(c) {
            switch (c.label) {
                case 0:
                    return [4, getIntegrations(e)];
                case 1:
                    return t = c.sent(), r = t.integrations, n = t.releases, 0 === (i = r.filter(function(e) {
                        return e.serviceAccount.serviceAccountType !== api.ServiceAccountType.CLI
                    })).length ? [2, []] : (i.sort(compare.strings(function(e) {
                        return e.serviceAccount.serviceAccountType
                    })), [4, getVaults(e)]);
                case 2:
                    return o = c.sent(), [2, Promise.all(i.map(function(t) {
                        var r = t.serviceAccount,
                            i = t.devices;
                        return __awaiter(void 0, void 0, void 0, function() {
                            var t, c;
                            return __generator(this, function(a) {
                                switch (a.label) {
                                    case 0:
                                        return t = [__assign({}, r)], c = {
                                            devices: i,
                                            type: "S",
                                            creatorUUID: "",
                                            serviceAccountSubtype: "na",
                                            serviceAccountType: r.serviceAccountType
                                        }, [4, buildSummaryObject({
                                            serviceAccount: r,
                                            devices: i,
                                            releases: n,
                                            usersVaults: o,
                                            type: r.serviceAccountType,
                                            CTX: e
                                        })];
                                    case 1:
                                        return [2, __assign.apply(void 0, t.concat([(c.summary = a.sent(), c)]))]
                                }
                            })
                        })
                    }))]
            }
        })
    })
};