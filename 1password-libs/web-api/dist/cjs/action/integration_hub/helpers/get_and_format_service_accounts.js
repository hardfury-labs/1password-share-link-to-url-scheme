"use strict";
var __assign = this && this.__assign || function() {
        return (__assign = Object.assign || function(e) {
            for (var t, r = 1, n = arguments.length; r < n; r++)
                for (var i in t = arguments[r]) Object.prototype.hasOwnProperty.call(t, i) && (e[i] = t[i]);
            return e
        }).apply(this, arguments)
    },
    __createBinding = this && this.__createBinding || (Object.create ? function(e, t, r, n) {
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
        return new(r || (r = Promise))(function(i, c) {
            function o(e) {
                try {
                    u(n.next(e))
                } catch (e) {
                    c(e)
                }
            }

            function a(e) {
                try {
                    u(n.throw(e))
                } catch (e) {
                    c(e)
                }
            }

            function u(e) {
                var t;
                e.done ? i(e.value) : (t = e.value, t instanceof r ? t : new r(function(e) {
                    e(t)
                })).then(o, a)
            }
            u((n = n.apply(e, t || [])).next())
        })
    },
    __generator = this && this.__generator || function(e, t) {
        var r, n, i, c, o = {
            label: 0,
            sent: function() {
                if (1 & i[0]) throw i[1];
                return i[1]
            },
            trys: [],
            ops: []
        };
        return c = {
            next: a(0),
            throw: a(1),
            return: a(2)
        }, "function" == typeof Symbol && (c[Symbol.iterator] = function() {
            return this
        }), c;

        function a(c) {
            return function(a) {
                return function(c) {
                    if (r) throw new TypeError("Generator is already executing.");
                    for (; o;) try {
                        if (r = 1, n && (i = 2 & c[0] ? n.return : c[0] ? n.throw || ((i = n.return) && i.call(n), 0) : n.next) && !(i = i.call(n, c[1])).done) return i;
                        switch (n = 0, i && (c = [2 & c[0], i.value]), c[0]) {
                            case 0:
                            case 1:
                                i = c;
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
                                if (!(i = (i = o.trys).length > 0 && i[i.length - 1]) && (6 === c[0] || 2 === c[0])) {
                                    o = 0;
                                    continue
                                }
                                if (3 === c[0] && (!i || c[1] > i[0] && c[1] < i[3])) {
                                    o.label = c[1];
                                    break
                                }
                                if (6 === c[0] && o.label < i[1]) {
                                    o.label = i[1], i = c;
                                    break
                                }
                                if (i && o.label < i[2]) {
                                    o.label = i[2], o.ops.push(c);
                                    break
                                }
                                i[2] && o.ops.pop(), o.trys.pop();
                                continue
                        }
                        c = t.call(e, o)
                    } catch (e) {
                        c = [6, e], n = 0
                    } finally {
                        r = i = 0
                    }
                    if (5 & c[0]) throw c[1];
                    return {
                        value: c[0] ? c[1] : void 0,
                        done: !0
                    }
                }([c, a])
            }
        }
    };
Object.defineProperty(exports, "__esModule", {
    value: !0
}), exports.getAndFormatServiceAccounts = void 0;
var api = __importStar(require("../../../api")),
    util_1 = require("../../../util"),
    serviceaccounts_1 = require("../../serviceaccounts"),
    vault_1 = require("../../vault"),
    summary_1 = require("./summary"),
    getAndFormatServiceAccounts = function(e) {
        return __awaiter(void 0, void 0, void 0, function() {
            var t, r, n, i, c;
            return __generator(this, function(o) {
                switch (o.label) {
                    case 0:
                        return [4, serviceaccounts_1.getIntegrations(e)];
                    case 1:
                        return t = o.sent(), r = t.integrations, n = t.releases, 0 === (i = r.filter(function(e) {
                            return e.serviceAccount.serviceAccountType !== api.ServiceAccountType.CLI
                        })).length ? [2, []] : (i.sort(util_1.compare.strings(function(e) {
                            return e.serviceAccount.serviceAccountType
                        })), [4, vault_1.getVaults(e)]);
                    case 2:
                        return c = o.sent(), [2, Promise.all(i.map(function(t) {
                            var r = t.serviceAccount,
                                i = t.devices;
                            return __awaiter(void 0, void 0, void 0, function() {
                                var t, o;
                                return __generator(this, function(a) {
                                    switch (a.label) {
                                        case 0:
                                            return t = [__assign({}, r)], o = {
                                                devices: i,
                                                type: "S",
                                                creatorUUID: "",
                                                serviceAccountSubtype: "na",
                                                serviceAccountType: r.serviceAccountType
                                            }, [4, summary_1.buildSummaryObject({
                                                serviceAccount: r,
                                                devices: i,
                                                releases: n,
                                                usersVaults: c,
                                                type: r.serviceAccountType,
                                                CTX: e
                                            })];
                                        case 1:
                                            return [2, __assign.apply(void 0, t.concat([(o.summary = a.sent(), o)]))]
                                    }
                                })
                            })
                        }))]
                }
            })
        })
    };
exports.getAndFormatServiceAccounts = getAndFormatServiceAccounts;