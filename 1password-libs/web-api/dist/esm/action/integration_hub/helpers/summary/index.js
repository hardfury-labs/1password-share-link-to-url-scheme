var __awaiter = this && this.__awaiter || function(e, t, r, n) {
        return new(r || (r = Promise))(function(a, c) {
            function o(e) {
                try {
                    u(n.next(e))
                } catch (e) {
                    c(e)
                }
            }

            function i(e) {
                try {
                    u(n.throw(e))
                } catch (e) {
                    c(e)
                }
            }

            function u(e) {
                var t;
                e.done ? a(e.value) : (t = e.value, t instanceof r ? t : new r(function(e) {
                    e(t)
                })).then(o, i)
            }
            u((n = n.apply(e, t || [])).next())
        })
    },
    __generator = this && this.__generator || function(e, t) {
        var r, n, a, c, o = {
            label: 0,
            sent: function() {
                if (1 & a[0]) throw a[1];
                return a[1]
            },
            trys: [],
            ops: []
        };
        return c = {
            next: i(0),
            throw: i(1),
            return: i(2)
        }, "function" == typeof Symbol && (c[Symbol.iterator] = function() {
            return this
        }), c;

        function i(c) {
            return function(i) {
                return function(c) {
                    if (r) throw new TypeError("Generator is already executing.");
                    for (; o;) try {
                        if (r = 1, n && (a = 2 & c[0] ? n.return : c[0] ? n.throw || ((a = n.return) && a.call(n), 0) : n.next) && !(a = a.call(n, c[1])).done) return a;
                        switch (n = 0, a && (c = [2 & c[0], a.value]), c[0]) {
                            case 0:
                            case 1:
                                a = c;
                                break;
                            case 4:
                                return o.label++, {
                                    value: c[1],
                                    done: !1
                                };
                            case 5:
                                o.label++, n = c[1], c = [0];
                                continue;
                            case 7:
                                c = o.ops.pop(), o.trys.pop();
                                continue;
                            default:
                                if (!(a = (a = o.trys).length > 0 && a[a.length - 1]) && (6 === c[0] || 2 === c[0])) {
                                    o = 0;
                                    continue
                                }
                                if (3 === c[0] && (!a || c[1] > a[0] && c[1] < a[3])) {
                                    o.label = c[1];
                                    break
                                }
                                if (6 === c[0] && o.label < a[1]) {
                                    o.label = a[1], a = c;
                                    break
                                }
                                if (a && o.label < a[2]) {
                                    o.label = a[2], o.ops.push(c);
                                    break
                                }
                                a[2] && o.ops.pop(), o.trys.pop();
                                continue
                        }
                        c = t.call(e, o)
                    } catch (e) {
                        c = [6, e], n = 0
                    } finally {
                        r = a = 0
                    }
                    if (5 & c[0]) throw c[1];
                    return {
                        value: c[0] ? c[1] : void 0,
                        done: !0
                    }
                }([c, i])
            }
        }
    };
import {
    ServiceAccountType
} from "../../../../api";
import {
    getConnectSummaryInfo
} from "./connect";
import {
    getDataStreamingSummaryInfo
} from "./data_streaming";
import {
    getProvisioningSummaryInfo
} from "./provisioning";
export var buildSummaryObject = function(e) {
    var t = e.serviceAccount,
        r = e.devices,
        n = e.releases,
        a = e.slackApp,
        c = e.type,
        o = e.CTX,
        i = e.usersVaults,
        u = e.vaultItem;
    return __awaiter(void 0, void 0, void 0, function() {
        var e, s;
        return __generator(this, function(l) {
            switch (l.label) {
                case 0:
                    switch (e = "", c) {
                        case ServiceAccountType.Connect:
                            return [3, 1];
                        case ServiceAccountType.Provisioning:
                            return [3, 4];
                        case ServiceAccountType.DataStreaming:
                            return [3, 7];
                        case ServiceAccountType.Duo:
                            return [3, 10];
                        case ServiceAccountType.Slack:
                            return [3, 11];
                        case ServiceAccountType.MaskedEmails:
                            return [3, 12];
                        case ServiceAccountType.CLI:
                        case ServiceAccountType.UserManaged:
                        case ServiceAccountType.NA:
                            return [3, 13]
                    }
                    return [3, 14];
                case 1:
                    return t ? [4, getConnectSummaryInfo({
                        CTX: o,
                        sa: t,
                        devices: r,
                        usersVaults: i
                    })] : [3, 3];
                case 2:
                    return [2, l.sent()];
                case 3:
                    return [3, 14];
                case 4:
                    return t ? [4, getProvisioningSummaryInfo({
                        CTX: o,
                        sa: t,
                        releases: n
                    })] : [3, 6];
                case 5:
                    return [2, l.sent()];
                case 6:
                    return [3, 14];
                case 7:
                    return t ? [4, getDataStreamingSummaryInfo({
                        CTX: o,
                        sa: t
                    })] : [3, 9];
                case 8:
                    return [2, l.sent()];
                case 9:
                    return [3, 14];
                case 10:
                    return s = "icon-duo.svg", [3, 14];
                case 11:
                    return e = a ? a.teamName : "", s = "slack-icon-v2.svg", [3, 14];
                case 12:
                    return s = "icon-fastmail-60.svg", [3, 14];
                case 13:
                    return [3, 14];
                case 14:
                    return [2, {
                        title: e,
                        active: void 0,
                        icon: s,
                        groups: [],
                        syncActivity: void 0,
                        createdAt: void 0,
                        tokens: void 0,
                        version: "",
                        vaults: {
                            displayable: [],
                            total: 0
                        },
                        vaultItem: u
                    }]
            }
        })
    })
};