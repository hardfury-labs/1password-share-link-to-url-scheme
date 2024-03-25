var __awaiter = this && this.__awaiter || function(t, e, r, o) {
        return new(r || (r = Promise))(function(n, a) {
            function i(t) {
                try {
                    s(o.next(t))
                } catch (t) {
                    a(t)
                }
            }

            function c(t) {
                try {
                    s(o.throw(t))
                } catch (t) {
                    a(t)
                }
            }

            function s(t) {
                var e;
                t.done ? n(t.value) : (e = t.value, e instanceof r ? e : new r(function(t) {
                    t(e)
                })).then(i, c)
            }
            s((o = o.apply(t, e || [])).next())
        })
    },
    __generator = this && this.__generator || function(t, e) {
        var r, o, n, a, i = {
            label: 0,
            sent: function() {
                if (1 & n[0]) throw n[1];
                return n[1]
            },
            trys: [],
            ops: []
        };
        return a = {
            next: c(0),
            throw: c(1),
            return: c(2)
        }, "function" == typeof Symbol && (a[Symbol.iterator] = function() {
            return this
        }), a;

        function c(a) {
            return function(c) {
                return function(a) {
                    if (r) throw new TypeError("Generator is already executing.");
                    for (; i;) try {
                        if (r = 1, o && (n = 2 & a[0] ? o.return : a[0] ? o.throw || ((n = o.return) && n.call(o), 0) : o.next) && !(n = n.call(o, a[1])).done) return n;
                        switch (o = 0, n && (a = [2 & a[0], n.value]), a[0]) {
                            case 0:
                            case 1:
                                n = a;
                                break;
                            case 4:
                                return i.label++, {
                                    value: a[1],
                                    done: !1
                                };
                            case 5:
                                i.label++, o = a[1], a = [0];
                                continue;
                            case 7:
                                a = i.ops.pop(), i.trys.pop();
                                continue;
                            default:
                                if (!(n = (n = i.trys).length > 0 && n[n.length - 1]) && (6 === a[0] || 2 === a[0])) {
                                    i = 0;
                                    continue
                                }
                                if (3 === a[0] && (!n || a[1] > n[0] && a[1] < n[3])) {
                                    i.label = a[1];
                                    break
                                }
                                if (6 === a[0] && i.label < n[1]) {
                                    i.label = n[1], n = a;
                                    break
                                }
                                if (n && i.label < n[2]) {
                                    i.label = n[2], i.ops.push(a);
                                    break
                                }
                                n[2] && i.ops.pop(), i.trys.pop();
                                continue
                        }
                        a = e.call(t, i)
                    } catch (t) {
                        a = [6, t], o = 0
                    } finally {
                        r = n = 0
                    }
                    if (5 & a[0]) throw a[1];
                    return {
                        value: a[0] ? a[1] : void 0,
                        done: !0
                    }
                }([a, c])
            }
        }
    },
    __values = this && this.__values || function(t) {
        var e = "function" == typeof Symbol && Symbol.iterator,
            r = e && t[e],
            o = 0;
        if (r) return r.call(t);
        if (t && "number" == typeof t.length) return {
            next: function() {
                return t && o >= t.length && (t = void 0), {
                    value: t && t[o++],
                    done: !t
                }
            }
        };
        throw new TypeError(e ? "Object is not iterable." : "Symbol.iterator is not defined.")
    },
    __read = this && this.__read || function(t, e) {
        var r = "function" == typeof Symbol && t[Symbol.iterator];
        if (!r) return t;
        var o, n, a = r.call(t),
            i = [];
        try {
            for (;
                (void 0 === e || e-- > 0) && !(o = a.next()).done;) i.push(o.value)
        } catch (t) {
            n = {
                error: t
            }
        } finally {
            try {
                o && !o.done && (r = a.return) && r.call(a)
            } finally {
                if (n) throw n.error
            }
        }
        return i
    },
    __spread = this && this.__spread || function() {
        for (var t = [], e = 0; e < arguments.length; e++) t = t.concat(__read(arguments[e]));
        return t
    };
import {
    values
} from "lodash-es";
import * as api from "../api";
import {
    ObjectType
} from "../api";
import {
    PASSWORD_STRENGTH,
    WatchtowerStructureVersion
} from "../model";
import * as model from "../model";
import {
    encrypt
} from "../model/crypto_v2";
import {
    parseAdminWatchtowerReports
} from "../parser/admin_watchtower";
import {
    inBetween,
    json2ab,
    wait
} from "../util";
import {
    getAccountOverview
} from "./account_overview";
import {
    getObjectData,
    getUserCombinedObjectDataAccess
} from "./object_access";
import {
    loadTwoFactorSitesList,
    loadWatchtowerData,
    unloadTwoFactorSitesList,
    unloadWatchtowerData
} from "./text";
import {
    getVault
} from "./vault";
import {
    getVaultItems
} from "./vault_item";
import {
    generateWatchtowerReportForItems
} from "./vault_item_watchtower";
export var getWatchtowerReportCounts = function(t, e) {
    var r = 0,
        o = 0,
        n = 0,
        a = 0,
        i = 0,
        c = 0,
        s = 0,
        u = 0;
    return values(t).forEach(function(t) {
        t && (n = t.reusedPassword ? n + 1 : n, r = t.compromisedDomain ? r + 1 : r, o = t.vulnerablePassword ? o + 1 : o, t.passwordStrength && (a = inBetween(t.passwordStrength, 0, PASSWORD_STRENGTH.WEAK) ? a + 1 : a), i = t.unsecuredWebsite ? i + 1 : i, c = t.inactiveTwoFactor ? c + 1 : c, s = t.expiringSoon ? s + 1 : s, s = t.expired ? s + 1 : s, u += 1)
    }), {
        cw: r,
        vp: e ? o : void 0,
        rp: n,
        wp: a,
        uw: i,
        i2fa: c,
        exp: s,
        tot: u
    }
};
export var uploadWatchtowerReports = function(t, e, r) {
    return __awaiter(void 0, void 0, void 0, function() {
        var o, n, a, i, c, s, u, l, p, d, f, h, w, v, m;
        return __generator(this, function(b) {
            switch (b.label) {
                case 0:
                    return [4, getAccountOverview(t)];
                case 1:
                    return o = b.sent(), 0 === (n = o.watchtowerReportVersion && o.watchtowerReportVersion === WatchtowerStructureVersion && o.vaults ? o.vaults.filter(function(t) {
                        return t.watchtowerReportNeedsUpdating
                    }) : []).length ? [2] : [4, api.getWatchtowerPubkey(t.session)];
                case 2:
                    return a = b.sent(), [4, loadWatchtowerData()];
                case 3:
                    return b.sent(), [4, loadTwoFactorSitesList()];
                case 4:
                    b.sent(), b.label = 5;
                case 5:
                    b.trys.push([5, 15, 16, 17]), i = __values(n), c = i.next(), b.label = 6;
                case 6:
                    return c.done ? [3, 14] : (s = c.value, [4, getVault(t, s.uuid)]);
                case 7:
                    return u = b.sent(), ["U", "E"].includes(u.type) ? [4, getVaultItems(t, u)] : [3, 13];
                case 8:
                    return l = b.sent(), [4, generateWatchtowerReportForItems(l, e)];
                case 9:
                    return p = b.sent(), d = getWatchtowerReportCounts(p, e), [4, encrypt(a.pubKey, json2ab(d))];
                case 10:
                    return f = b.sent(), h = {
                        version: WatchtowerStructureVersion,
                        vaultContentVersion: u.contentVersion,
                        encData: f
                    }, [4, api.uploadWatchtowerReport(t.session, u.uuid, h)];
                case 11:
                    return b.sent(), r ? [4, wait(1e3)] : [3, 13];
                case 12:
                    b.sent(), b.label = 13;
                case 13:
                    return c = i.next(), [3, 6];
                case 14:
                    return [3, 17];
                case 15:
                    return w = b.sent(), v = {
                        error: w
                    }, [3, 17];
                case 16:
                    try {
                        c && !c.done && (m = i.return) && m.call(i)
                    } finally {
                        if (v) throw v.error
                    }
                    return [7];
                case 17:
                    return unloadTwoFactorSitesList(), unloadWatchtowerData(), [2]
            }
        })
    })
};
export var createWatchtowerPubkey = function(t, e, r) {
    return __awaiter(void 0, void 0, void 0, function() {
        return __generator(this, function(o) {
            return [2, api.createWatchtowerPubkey(t.session, e, r)]
        })
    })
};
export var getWatchtowerPubkey = function(t) {
    return __awaiter(void 0, void 0, void 0, function() {
        return __generator(this, function(e) {
            return [2, api.getWatchtowerPubkey(t.session)]
        })
    })
};
export var getWatchtowerReports = function(t, e) {
    return __awaiter(void 0, void 0, void 0, function() {
        var r, o, n, a;
        return __generator(this, function(i) {
            switch (i.label) {
                case 0:
                    return [4, batchGetWatchtowerReports(t, e)];
                case 1:
                    return 0 === (r = i.sent()).reports.length ? [2, {
                        reports: [],
                        accountVaultCount: 0
                    }] : [4, getUserCombinedObjectDataAccess(t, ObjectType.AdminWatchtowerKeyset)];
                case 2:
                    if (o = i.sent(), !(null === (n = o.data.find(function(t) {
                            return t.objectType === ObjectType.AdminWatchtowerKeyset
                        })) || void 0 === n ? void 0 : n.data)) throw new Error("Admin watchtower keyset oda does not exist.");
                    return [4, getObjectData(t, o, n.objectUuid, model.AdminWatchtowerKeysetObjectDataValue)];
                case 3:
                    return a = i.sent(), [4, parseAdminWatchtowerReports(t, r.reports, a)];
                case 4:
                    return [2, {
                        reports: i.sent(),
                        accountVaultCount: r.accountVaultCount
                    }]
            }
        })
    })
};
export var batchGetWatchtowerReports = function(t, e) {
    return __awaiter(void 0, void 0, void 0, function() {
        var r, o, n, a;
        return __generator(this, function(i) {
            switch (i.label) {
                case 0:
                    r = [], n = 0, i.label = 1;
                case 1:
                    return [4, api.getWatchtowerReport(t.session, e, o)];
                case 2:
                    a = i.sent(), r.push.apply(r, __spread(a.reports)), o = a.nextStartUuid, n = a.accountVaultCount, i.label = 3;
                case 3:
                    if (o) return [3, 1];
                    i.label = 4;
                case 4:
                    return [2, {
                        reports: r,
                        accountVaultCount: n
                    }]
            }
        })
    })
};