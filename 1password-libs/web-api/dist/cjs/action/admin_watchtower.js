"use strict";
var __createBinding = this && this.__createBinding || (Object.create ? function(e, t, r, o) {
        void 0 === o && (o = r), Object.defineProperty(e, o, {
            enumerable: !0,
            get: function() {
                return t[r]
            }
        })
    } : function(e, t, r, o) {
        void 0 === o && (o = r), e[o] = t[r]
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
    __awaiter = this && this.__awaiter || function(e, t, r, o) {
        return new(r || (r = Promise))(function(a, n) {
            function u(e) {
                try {
                    c(o.next(e))
                } catch (e) {
                    n(e)
                }
            }

            function i(e) {
                try {
                    c(o.throw(e))
                } catch (e) {
                    n(e)
                }
            }

            function c(e) {
                var t;
                e.done ? a(e.value) : (t = e.value, t instanceof r ? t : new r(function(e) {
                    e(t)
                })).then(u, i)
            }
            c((o = o.apply(e, t || [])).next())
        })
    },
    __generator = this && this.__generator || function(e, t) {
        var r, o, a, n, u = {
            label: 0,
            sent: function() {
                if (1 & a[0]) throw a[1];
                return a[1]
            },
            trys: [],
            ops: []
        };
        return n = {
            next: i(0),
            throw: i(1),
            return: i(2)
        }, "function" == typeof Symbol && (n[Symbol.iterator] = function() {
            return this
        }), n;

        function i(n) {
            return function(i) {
                return function(n) {
                    if (r) throw new TypeError("Generator is already executing.");
                    for (; u;) try {
                        if (r = 1, o && (a = 2 & n[0] ? o.return : n[0] ? o.throw || ((a = o.return) && a.call(o), 0) : o.next) && !(a = a.call(o, n[1])).done) return a;
                        switch (o = 0, a && (n = [2 & n[0], a.value]), n[0]) {
                            case 0:
                            case 1:
                                a = n;
                                break;
                            case 4:
                                return u.label++, {
                                    value: n[1],
                                    done: !1
                                };
                            case 5:
                                u.label++, o = n[1], n = [0];
                                continue;
                            case 7:
                                n = u.ops.pop(), u.trys.pop();
                                continue;
                            default:
                                if (!(a = (a = u.trys).length > 0 && a[a.length - 1]) && (6 === n[0] || 2 === n[0])) {
                                    u = 0;
                                    continue
                                }
                                if (3 === n[0] && (!a || n[1] > a[0] && n[1] < a[3])) {
                                    u.label = n[1];
                                    break
                                }
                                if (6 === n[0] && u.label < a[1]) {
                                    u.label = a[1], a = n;
                                    break
                                }
                                if (a && u.label < a[2]) {
                                    u.label = a[2], u.ops.push(n);
                                    break
                                }
                                a[2] && u.ops.pop(), u.trys.pop();
                                continue
                        }
                        n = t.call(e, u)
                    } catch (e) {
                        n = [6, e], o = 0
                    } finally {
                        r = a = 0
                    }
                    if (5 & n[0]) throw n[1];
                    return {
                        value: n[0] ? n[1] : void 0,
                        done: !0
                    }
                }([n, i])
            }
        }
    },
    __values = this && this.__values || function(e) {
        var t = "function" == typeof Symbol && Symbol.iterator,
            r = t && e[t],
            o = 0;
        if (r) return r.call(e);
        if (e && "number" == typeof e.length) return {
            next: function() {
                return e && o >= e.length && (e = void 0), {
                    value: e && e[o++],
                    done: !e
                }
            }
        };
        throw new TypeError(t ? "Object is not iterable." : "Symbol.iterator is not defined.")
    },
    __read = this && this.__read || function(e, t) {
        var r = "function" == typeof Symbol && e[Symbol.iterator];
        if (!r) return e;
        var o, a, n = r.call(e),
            u = [];
        try {
            for (;
                (void 0 === t || t-- > 0) && !(o = n.next()).done;) u.push(o.value)
        } catch (e) {
            a = {
                error: e
            }
        } finally {
            try {
                o && !o.done && (r = n.return) && r.call(n)
            } finally {
                if (a) throw a.error
            }
        }
        return u
    },
    __spread = this && this.__spread || function() {
        for (var e = [], t = 0; t < arguments.length; t++) e = e.concat(__read(arguments[t]));
        return e
    };
Object.defineProperty(exports, "__esModule", {
    value: !0
}), exports.batchGetWatchtowerReports = exports.getWatchtowerReports = exports.getWatchtowerPubkey = exports.createWatchtowerPubkey = exports.uploadWatchtowerReports = exports.getWatchtowerReportCounts = void 0;
var lodash_es_1 = require("lodash-es"),
    api = __importStar(require("../api")),
    api_1 = require("../api"),
    model_1 = require("../model"),
    model = __importStar(require("../model")),
    crypto_v2_1 = require("../model/crypto_v2"),
    admin_watchtower_1 = require("../parser/admin_watchtower"),
    util_1 = require("../util"),
    account_overview_1 = require("./account_overview"),
    object_access_1 = require("./object_access"),
    text_1 = require("./text"),
    vault_1 = require("./vault"),
    vault_item_1 = require("./vault_item"),
    vault_item_watchtower_1 = require("./vault_item_watchtower"),
    getWatchtowerReportCounts = function(e, t) {
        var r = 0,
            o = 0,
            a = 0,
            n = 0,
            u = 0,
            i = 0,
            c = 0,
            s = 0;
        return lodash_es_1.values(e).forEach(function(e) {
            e && (a = e.reusedPassword ? a + 1 : a, r = e.compromisedDomain ? r + 1 : r, o = e.vulnerablePassword ? o + 1 : o, e.passwordStrength && (n = util_1.inBetween(e.passwordStrength, 0, model_1.PASSWORD_STRENGTH.WEAK) ? n + 1 : n), u = e.unsecuredWebsite ? u + 1 : u, i = e.inactiveTwoFactor ? i + 1 : i, c = e.expiringSoon ? c + 1 : c, c = e.expired ? c + 1 : c, s += 1)
        }), {
            cw: r,
            vp: t ? o : void 0,
            rp: a,
            wp: n,
            uw: u,
            i2fa: i,
            exp: c,
            tot: s
        }
    };
exports.getWatchtowerReportCounts = getWatchtowerReportCounts;
var uploadWatchtowerReports = function(e, t, r) {
    return __awaiter(void 0, void 0, void 0, function() {
        var o, a, n, u, i, c, s, l, _, p, h, d, w, f, v;
        return __generator(this, function(b) {
            switch (b.label) {
                case 0:
                    return [4, account_overview_1.getAccountOverview(e)];
                case 1:
                    return o = b.sent(), 0 === (a = o.watchtowerReportVersion && o.watchtowerReportVersion === model_1.WatchtowerStructureVersion && o.vaults ? o.vaults.filter(function(e) {
                        return e.watchtowerReportNeedsUpdating
                    }) : []).length ? [2] : [4, api.getWatchtowerPubkey(e.session)];
                case 2:
                    return n = b.sent(), [4, text_1.loadWatchtowerData()];
                case 3:
                    return b.sent(), [4, text_1.loadTwoFactorSitesList()];
                case 4:
                    b.sent(), b.label = 5;
                case 5:
                    b.trys.push([5, 15, 16, 17]), u = __values(a), i = u.next(), b.label = 6;
                case 6:
                    return i.done ? [3, 14] : (c = i.value, [4, vault_1.getVault(e, c.uuid)]);
                case 7:
                    return s = b.sent(), ["U", "E"].includes(s.type) ? [4, vault_item_1.getVaultItems(e, s)] : [3, 13];
                case 8:
                    return l = b.sent(), [4, vault_item_watchtower_1.generateWatchtowerReportForItems(l, t)];
                case 9:
                    return _ = b.sent(), p = exports.getWatchtowerReportCounts(_, t), [4, crypto_v2_1.encrypt(n.pubKey, util_1.json2ab(p))];
                case 10:
                    return h = b.sent(), d = {
                        version: model_1.WatchtowerStructureVersion,
                        vaultContentVersion: s.contentVersion,
                        encData: h
                    }, [4, api.uploadWatchtowerReport(e.session, s.uuid, d)];
                case 11:
                    return b.sent(), r ? [4, util_1.wait(1e3)] : [3, 13];
                case 12:
                    b.sent(), b.label = 13;
                case 13:
                    return i = u.next(), [3, 6];
                case 14:
                    return [3, 17];
                case 15:
                    return w = b.sent(), f = {
                        error: w
                    }, [3, 17];
                case 16:
                    try {
                        i && !i.done && (v = u.return) && v.call(u)
                    } finally {
                        if (f) throw f.error
                    }
                    return [7];
                case 17:
                    return text_1.unloadTwoFactorSitesList(), text_1.unloadWatchtowerData(), [2]
            }
        })
    })
};
exports.uploadWatchtowerReports = uploadWatchtowerReports;
var createWatchtowerPubkey = function(e, t, r) {
    return __awaiter(void 0, void 0, void 0, function() {
        return __generator(this, function(o) {
            return [2, api.createWatchtowerPubkey(e.session, t, r)]
        })
    })
};
exports.createWatchtowerPubkey = createWatchtowerPubkey;
var getWatchtowerPubkey = function(e) {
    return __awaiter(void 0, void 0, void 0, function() {
        return __generator(this, function(t) {
            return [2, api.getWatchtowerPubkey(e.session)]
        })
    })
};
exports.getWatchtowerPubkey = getWatchtowerPubkey;
var getWatchtowerReports = function(e, t) {
    return __awaiter(void 0, void 0, void 0, function() {
        var r, o, a, n;
        return __generator(this, function(u) {
            switch (u.label) {
                case 0:
                    return [4, exports.batchGetWatchtowerReports(e, t)];
                case 1:
                    return 0 === (r = u.sent()).reports.length ? [2, {
                        reports: [],
                        accountVaultCount: 0
                    }] : [4, object_access_1.getUserCombinedObjectDataAccess(e, api_1.ObjectType.AdminWatchtowerKeyset)];
                case 2:
                    if (o = u.sent(), !(null === (a = o.data.find(function(e) {
                            return e.objectType === api_1.ObjectType.AdminWatchtowerKeyset
                        })) || void 0 === a ? void 0 : a.data)) throw new Error("Admin watchtower keyset oda does not exist.");
                    return [4, object_access_1.getObjectData(e, o, a.objectUuid, model.AdminWatchtowerKeysetObjectDataValue)];
                case 3:
                    return n = u.sent(), [4, admin_watchtower_1.parseAdminWatchtowerReports(e, r.reports, n)];
                case 4:
                    return [2, {
                        reports: u.sent(),
                        accountVaultCount: r.accountVaultCount
                    }]
            }
        })
    })
};
exports.getWatchtowerReports = getWatchtowerReports;
var batchGetWatchtowerReports = function(e, t) {
    return __awaiter(void 0, void 0, void 0, function() {
        var r, o, a, n;
        return __generator(this, function(u) {
            switch (u.label) {
                case 0:
                    r = [], a = 0, u.label = 1;
                case 1:
                    return [4, api.getWatchtowerReport(e.session, t, o)];
                case 2:
                    n = u.sent(), r.push.apply(r, __spread(n.reports)), o = n.nextStartUuid, a = n.accountVaultCount, u.label = 3;
                case 3:
                    if (o) return [3, 1];
                    u.label = 4;
                case 4:
                    return [2, {
                        reports: r,
                        accountVaultCount: a
                    }]
            }
        })
    })
};
exports.batchGetWatchtowerReports = batchGetWatchtowerReports;