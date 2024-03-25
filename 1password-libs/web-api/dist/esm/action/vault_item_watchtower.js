var __awaiter = this && this.__awaiter || function(e, t, r, o) {
        return new(r || (r = Promise))(function(a, n) {
            function i(e) {
                try {
                    u(o.next(e))
                } catch (e) {
                    n(e)
                }
            }

            function l(e) {
                try {
                    u(o.throw(e))
                } catch (e) {
                    n(e)
                }
            }

            function u(e) {
                var t;
                e.done ? a(e.value) : (t = e.value, t instanceof r ? t : new r(function(e) {
                    e(t)
                })).then(i, l)
            }
            u((o = o.apply(e, t || [])).next())
        })
    },
    __generator = this && this.__generator || function(e, t) {
        var r, o, a, n, i = {
            label: 0,
            sent: function() {
                if (1 & a[0]) throw a[1];
                return a[1]
            },
            trys: [],
            ops: []
        };
        return n = {
            next: l(0),
            throw: l(1),
            return: l(2)
        }, "function" == typeof Symbol && (n[Symbol.iterator] = function() {
            return this
        }), n;

        function l(n) {
            return function(l) {
                return function(n) {
                    if (r) throw new TypeError("Generator is already executing.");
                    for (; i;) try {
                        if (r = 1, o && (a = 2 & n[0] ? o.return : n[0] ? o.throw || ((a = o.return) && a.call(o), 0) : o.next) && !(a = a.call(o, n[1])).done) return a;
                        switch (o = 0, a && (n = [2 & n[0], a.value]), n[0]) {
                            case 0:
                            case 1:
                                a = n;
                                break;
                            case 4:
                                return i.label++, {
                                    value: n[1],
                                    done: !1
                                };
                            case 5:
                                i.label++, o = n[1], n = [0];
                                continue;
                            case 7:
                                n = i.ops.pop(), i.trys.pop();
                                continue;
                            default:
                                if (!(a = (a = i.trys).length > 0 && a[a.length - 1]) && (6 === n[0] || 2 === n[0])) {
                                    i = 0;
                                    continue
                                }
                                if (3 === n[0] && (!a || n[1] > a[0] && n[1] < a[3])) {
                                    i.label = n[1];
                                    break
                                }
                                if (6 === n[0] && i.label < a[1]) {
                                    i.label = a[1], a = n;
                                    break
                                }
                                if (a && i.label < a[2]) {
                                    i.label = a[2], i.ops.push(n);
                                    break
                                }
                                a[2] && i.ops.pop(), i.trys.pop();
                                continue
                        }
                        n = t.call(e, i)
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
                }([n, l])
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
    };
import {
    countBy,
    find,
    findKey,
    includes,
    keyBy,
    mapValues,
    startsWith,
    values
} from "lodash-es";
import moment from "moment";
import * as model from "../model";
import {
    VaultItem
} from "../model";
import * as util from "../util";
import {
    makePromise as mp
} from "../util/make_promise";
import {
    getHibpReport
} from "./hibp";
import {
    checkPwnedPasswords,
    getTwoFactorSitesList,
    getWatchtowerData
} from "./text";
var codeLocation = "action/vault_item_watchtower",
    makePromise = mp(codeLocation),
    PASSPORT_EXPIRING_SOON = 23328e3,
    CREDIT_CARD_EXPIRING_SOON = 5184e3,
    DRIVER_LICENSE_EXPIRING_SOON = 5184e3,
    MEMBERSHIP_EXPIRING_SOON = 5184e3,
    checkAllPwnedPasswords = function(e) {
        return __awaiter(void 0, void 0, void 0, function() {
            var t, r;
            return __generator(this, function(o) {
                switch (o.label) {
                    case 0:
                        return o.trys.push([0, 2, , 3]), [4, Promise.all(e.map(checkPwnedPasswords))];
                    case 1:
                        return t = o.sent(), [2, includes(t, !0)];
                    case 2:
                        return r = o.sent(), console.error("Failed to check pwned passwords.", r), [2, !1];
                    case 3:
                        return [2]
                }
            })
        })
    };
export var generateWatchtowerReportForItem = function(e, t, r) {
    return makePromise("generateWatchtowerReportForItem", function() {
        var o = {};
        if (e.overview.b5UserUUID) return o;
        var a = t ? checkAllPwnedPasswords : function() {
                return Promise.resolve(!1)
            },
            n = r || getAllPasswordsInItem(e);
        return a(n).then(function(t) {
            var r, a, i = getWatchtowerCompromisedDomainForItem(e);
            if (i) {
                o.compromisedDomain = i;
                var l = getHibpReport();
                l && l[i] && (o.hibpReport = l[i])
            }
            t && (o.vulnerablePassword = !0);
            var u, s = e.username ? e.username.value : "";
            try {
                for (var c = __values(n), d = c.next(); !d.done; d = c.next()) {
                    var f = d.value,
                        m = util.calculatePasswordStrength(f, s);
                    (!o.passwordStrength || o.passwordStrength > m) && (o.passwordStrength = m)
                }
            } catch (e) {
                r = {
                    error: e
                }
            } finally {
                try {
                    d && !d.done && (a = c.return) && a.call(c)
                } finally {
                    if (r) throw r.error
                }
            }
            if (e.url && startsWith(e.url.toLowerCase(), "http://") && (o.unsecuredWebsite = !0), e.templateUuid === model.VaultItemTemplate.LoginUuid) {
                var v = getTwoFactorInfoForURL(e.url);
                v && !isTwoFactorActiveForItem(e) && (o.inactiveTwoFactor = v)
            }
            var p = 0;
            if (e.templateUuid === model.VaultItemTemplate.PassportUuid)(h = VaultItem.findFieldWithName(VaultItem.FieldName.Passport.Expiry, e)) && (u = VaultItem.getNumberValue(h), p = PASSPORT_EXPIRING_SOON);
            else if (e.templateUuid === model.VaultItemTemplate.DriverLicenseUuid) {
                (h = VaultItem.findFieldWithName(VaultItem.FieldName.DriverLicense.Expiry, e)) && (u = moment(VaultItem.getStringValue(h), "YYYYMM").unix(), p = DRIVER_LICENSE_EXPIRING_SOON)
            } else if (e.templateUuid === model.VaultItemTemplate.CreditCardUuid) {
                (h = VaultItem.findFieldWithName(VaultItem.FieldName.CreditCard.Expiry, e)) && (u = moment(VaultItem.getNumberValue(h), "YYYYMM").endOf("month").unix(), p = CREDIT_CARD_EXPIRING_SOON)
            } else if (e.templateUuid === model.VaultItemTemplate.MembershipUuid) {
                var h;
                (h = VaultItem.findFieldWithName(VaultItem.FieldName.Membership.Expiry, e)) && (u = moment(VaultItem.getStringValue(h), "YYYYMM").unix(), p = MEMBERSHIP_EXPIRING_SOON)
            }
            if ("number" == typeof u && !Number.isNaN(u)) {
                var w = Math.floor(Date.now() / 1e3);
                w > u ? o.expired = !0 : w > u - p && (o.expiringSoon = !0)
            }
            return o
        })
    })
};
export var generateWatchtowerReportForItems = function(e, t) {
    return makePromise("generateWatchtowerReportForItems", function() {
        for (var r, o, a = {}, n = e.filter(function(e) {
                return "N" === e.state
            }), i = mapValues(keyBy(n, "uuid"), function(e) {
                return getAllPasswordsInItem(e)
            }), l = countBy(values(i)), u = []; n.length > 0;) u.push(n.splice(0, 10));
        var s = Promise.resolve([]),
            c = function(e) {
                s = s.then(function() {
                    var r, o, n = [],
                        u = function(e) {
                            n.push(generateWatchtowerReportForItem(e, t, i[e.uuid]).then(function(t) {
                                var r, o, n = i[e.uuid];
                                if (n) try {
                                    for (var u = (r = void 0, __values(n)), s = u.next(); !s.done; s = u.next()) {
                                        var c = s.value,
                                            d = l[c];
                                        (null !== d && void 0 !== d ? d : 0) > 1 && (t.reusedPassword = !0)
                                    }
                                } catch (e) {
                                    r = {
                                        error: e
                                    }
                                } finally {
                                    try {
                                        s && !s.done && (o = u.return) && o.call(u)
                                    } finally {
                                        if (r) throw r.error
                                    }
                                }
                                a[e.uuid] = t
                            }))
                        };
                    try {
                        for (var s = (r = void 0, __values(e)), c = s.next(); !c.done; c = s.next()) {
                            u(c.value)
                        }
                    } catch (e) {
                        r = {
                            error: e
                        }
                    } finally {
                        try {
                            c && !c.done && (o = s.return) && o.call(s)
                        } finally {
                            if (r) throw r.error
                        }
                    }
                    return Promise.all(n)
                })
            };
        try {
            for (var d = __values(u), f = d.next(); !f.done; f = d.next()) {
                c(f.value)
            }
        } catch (e) {
            r = {
                error: e
            }
        } finally {
            try {
                f && !f.done && (o = d.return) && o.call(d)
            } finally {
                if (r) throw r.error
            }
        }
        return s.then(function() {
            return a
        })
    })
};
var getWatchtowerCompromisedDomainForItem = function(e) {
        var t, r, o = getWatchtowerData();
        if (e.getPassword()) {
            var a = e.overview ? e.overview.URLs : void 0;
            if (a) {
                var n = {};
                try {
                    for (var i = __values(a), l = i.next(); !l.done; l = i.next()) {
                        var u = l.value,
                            s = void 0;
                        try {
                            s = (s = new URL(util.addProtocolToUrlIfNeeded(u.u)).hostname).replace(/^www\./, "")
                        } catch (e) {
                            continue
                        }
                        var c = o[s];
                        c && (n[s] = c)
                    }
                } catch (e) {
                    t = {
                        error: e
                    }
                } finally {
                    try {
                        l && !l.done && (r = i.return) && r.call(i)
                    } finally {
                        if (t) throw t.error
                    }
                }
                if (0 !== Object.keys(n).length) {
                    var d = e.passwordUpdatedAt;
                    if (d) return findKey(n, function(e) {
                        return "number" == typeof e && e > d
                    })
                }
            }
        }
    },
    getAllPasswordsInItem = function(e) {
        var t, r, o, a, n = [];
        if (e.templateUuid === model.VaultItemTemplate.LoginUuid || e.templateUuid === model.VaultItemTemplate.PasswordUuid) {
            var i = e.getPassword();
            i && (e.overview.url || i.length > 6 || /\D/.test(i)) && n.push(i)
        } else if (e.details && e.details.sections) try {
            for (var l = __values(e.details.sections), u = l.next(); !u.done; u = l.next()) {
                var s = u.value;
                if (s.fields) {
                    var c = s.fields.filter(function(e) {
                        return e.k === VaultItem.FieldType.Concealed && includes(e.n, "password")
                    });
                    try {
                        for (var d = (o = void 0, __values(c)), f = d.next(); !f.done; f = d.next()) {
                            var m = f.value;
                            m.v && n.push(VaultItem.getStringValue(m))
                        }
                    } catch (e) {
                        o = {
                            error: e
                        }
                    } finally {
                        try {
                            f && !f.done && (a = d.return) && a.call(d)
                        } finally {
                            if (o) throw o.error
                        }
                    }
                }
            }
        } catch (e) {
            t = {
                error: e
            }
        } finally {
            try {
                u && !u.done && (r = l.return) && r.call(l)
            } finally {
                if (t) throw t.error
            }
        }
        return n
    },
    getTwoFactorInfoForURL = function(e) {
        if (e) {
            var t = getTwoFactorSitesList();
            try {
                var r = new URL(util.addProtocolToUrlIfNeeded(e)).hostname;
                if (t[r]) return t[r];
                var o = r.split(".");
                o.shift();
                var a = o.join(".");
                return t[a] ? t[a] : void 0
            } catch (e) {
                return
            }
        }
    },
    isTwoFactorActiveForItem = function(e) {
        var t, r;
        if (e.tags.some(function(e) {
                return !!e && "2fa" === e.toLowerCase()
            })) return !0;
        if (!e.details || !e.details.sections) return !1;
        try {
            for (var o = __values(e.details.sections), a = o.next(); !a.done; a = o.next()) {
                var n = a.value,
                    i = find(n.fields, function(e) {
                        return VaultItem.isTotpField(e)
                    });
                if (i && i.v) return !0
            }
        } catch (e) {
            t = {
                error: e
            }
        } finally {
            try {
                a && !a.done && (r = o.return) && r.call(o)
            } finally {
                if (t) throw t.error
            }
        }
        return !1
    };