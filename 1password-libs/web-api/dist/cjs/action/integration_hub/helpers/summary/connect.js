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
                    c(n.next(e))
                } catch (e) {
                    o(e)
                }
            }

            function u(e) {
                try {
                    c(n.throw(e))
                } catch (e) {
                    o(e)
                }
            }

            function c(e) {
                var t;
                e.done ? a(e.value) : (t = e.value, t instanceof r ? t : new r(function(e) {
                    e(t)
                })).then(i, u)
            }
            c((n = n.apply(e, t || [])).next())
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
    };
Object.defineProperty(exports, "__esModule", {
    value: !0
}), exports.getConnectSummaryInfo = void 0;
var model = __importStar(require("../../../../model")),
    shared_1 = require("../../../../shared"),
    util_1 = require("../../../../util"),
    serviceaccounts_1 = require("../../../serviceaccounts"),
    getConnectSummaryInfo = function(e) {
        var t = e.CTX,
            r = e.sa,
            n = e.devices,
            a = e.usersVaults;
        return __awaiter(void 0, void 0, void 0, function() {
            var e, o, i, u, c, s;
            return __generator(this, function(l) {
                switch (l.label) {
                    case 0:
                        return l.trys.push([0, 2, , 3]), [4, serviceaccounts_1.getServiceAccount(t, r.uuid, {
                            attrs: model.ServiceAccountUser.Attr.Tokens | model.ServiceAccountUser.Attr.VaultAccess
                        })];
                    case 1:
                        return o = l.sent(), e = getActiveTokens(o.tokens).length, [3, 3];
                    case 2:
                        return i = l.sent(), console.error("Could not get tokens and vault access for " + r.uuid, i), [3, 3];
                    case 3:
                        return u = function() {
                            return o.displayableVaultAccess && a ? o.displayableVaultAccess.map(function(e) {
                                var t = a.find(function(t) {
                                    return t.uuid === e.vaultUuid
                                });
                                return {
                                    uuid: e.accessorUuid,
                                    avatar: t.avatar,
                                    type: t.type
                                }
                            }) : []
                        }, c = function() {
                            return o.totalAccessibleVaults
                        }, s = n && n.filter(isConnectDevice).sort(shared_1.Device.compareAuthDates).shift(), [2, {
                            title: r.name,
                            icon: r.avatar,
                            active: e,
                            tokens: void 0,
                            groups: [],
                            syncActivity: util_1.dateFromGolang(r.lastAuthAt),
                            createdAt: util_1.dateFromGolang(r.createdAt),
                            version: null === s || void 0 === s ? void 0 : s.clientVersion,
                            vaults: {
                                displayable: u(),
                                total: c()
                            }
                        }]
                }
            })
        })
    };
exports.getConnectSummaryInfo = getConnectSummaryInfo;
var getActiveTokens = function(e) {
        var t = new Date;
        return e.filter(function(e) {
            var r = e.expiresAt && new Date(e.expiresAt) < t;
            return "A" === e.state && !r
        })
    },
    CONNECT_DEVICE_NAME = "1passwordconnect",
    isConnectDevice = function(e) {
        return e.clientName.replace(/\s+/g, "").toLowerCase() === CONNECT_DEVICE_NAME
    };