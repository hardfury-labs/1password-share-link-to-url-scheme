"use strict";
var __awaiter = this && this.__awaiter || function(e, t, r, n) {
        return new(r || (r = Promise))(function(a, c) {
            function i(e) {
                try {
                    u(n.next(e))
                } catch (e) {
                    c(e)
                }
            }

            function o(e) {
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
                })).then(i, o)
            }
            u((n = n.apply(e, t || [])).next())
        })
    },
    __generator = this && this.__generator || function(e, t) {
        var r, n, a, c, i = {
            label: 0,
            sent: function() {
                if (1 & a[0]) throw a[1];
                return a[1]
            },
            trys: [],
            ops: []
        };
        return c = {
            next: o(0),
            throw: o(1),
            return: o(2)
        }, "function" == typeof Symbol && (c[Symbol.iterator] = function() {
            return this
        }), c;

        function o(c) {
            return function(o) {
                return function(c) {
                    if (r) throw new TypeError("Generator is already executing.");
                    for (; i;) try {
                        if (r = 1, n && (a = 2 & c[0] ? n.return : c[0] ? n.throw || ((a = n.return) && a.call(n), 0) : n.next) && !(a = a.call(n, c[1])).done) return a;
                        switch (n = 0, a && (c = [2 & c[0], a.value]), c[0]) {
                            case 0:
                            case 1:
                                a = c;
                                break;
                            case 4:
                                return i.label++, {
                                    value: c[1],
                                    done: !1
                                };
                            case 5:
                                i.label++, n = c[1], c = [0];
                                continue;
                            case 7:
                                c = i.ops.pop(), i.trys.pop();
                                continue;
                            default:
                                if (!(a = (a = i.trys).length > 0 && a[a.length - 1]) && (6 === c[0] || 2 === c[0])) {
                                    i = 0;
                                    continue
                                }
                                if (3 === c[0] && (!a || c[1] > a[0] && c[1] < a[3])) {
                                    i.label = c[1];
                                    break
                                }
                                if (6 === c[0] && i.label < a[1]) {
                                    i.label = a[1], a = c;
                                    break
                                }
                                if (a && i.label < a[2]) {
                                    i.label = a[2], i.ops.push(c);
                                    break
                                }
                                a[2] && i.ops.pop(), i.trys.pop();
                                continue
                        }
                        c = t.call(e, i)
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
                }([c, o])
            }
        }
    };
Object.defineProperty(exports, "__esModule", {
    value: !0
}), exports.buildSummaryObject = void 0;
var api_1 = require("../../../../api"),
    connect_1 = require("./connect"),
    data_streaming_1 = require("./data_streaming"),
    provisioning_1 = require("./provisioning"),
    buildSummaryObject = function(e) {
        var t = e.serviceAccount,
            r = e.devices,
            n = e.releases,
            a = e.slackApp,
            c = e.type,
            i = e.CTX,
            o = e.usersVaults,
            u = e.vaultItem;
        return __awaiter(void 0, void 0, void 0, function() {
            var e, s;
            return __generator(this, function(l) {
                switch (l.label) {
                    case 0:
                        switch (e = "", c) {
                            case api_1.ServiceAccountType.Connect:
                                return [3, 1];
                            case api_1.ServiceAccountType.Provisioning:
                                return [3, 4];
                            case api_1.ServiceAccountType.DataStreaming:
                                return [3, 7];
                            case api_1.ServiceAccountType.Duo:
                                return [3, 10];
                            case api_1.ServiceAccountType.Slack:
                                return [3, 11];
                            case api_1.ServiceAccountType.MaskedEmails:
                                return [3, 12];
                            case api_1.ServiceAccountType.CLI:
                            case api_1.ServiceAccountType.UserManaged:
                            case api_1.ServiceAccountType.NA:
                                return [3, 13]
                        }
                        return [3, 14];
                    case 1:
                        return t ? [4, connect_1.getConnectSummaryInfo({
                            CTX: i,
                            sa: t,
                            devices: r,
                            usersVaults: o
                        })] : [3, 3];
                    case 2:
                        return [2, l.sent()];
                    case 3:
                        return [3, 14];
                    case 4:
                        return t ? [4, provisioning_1.getProvisioningSummaryInfo({
                            CTX: i,
                            sa: t,
                            releases: n
                        })] : [3, 6];
                    case 5:
                        return [2, l.sent()];
                    case 6:
                        return [3, 14];
                    case 7:
                        return t ? [4, data_streaming_1.getDataStreamingSummaryInfo({
                            CTX: i,
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
exports.buildSummaryObject = buildSummaryObject;