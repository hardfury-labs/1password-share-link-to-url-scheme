"use strict";
var __awaiter = this && this.__awaiter || function(e, t, r, n) {
        return new(r || (r = Promise))(function(a, o) {
            function i(e) {
                try {
                    s(n.next(e))
                } catch (e) {
                    o(e)
                }
            }

            function _(e) {
                try {
                    s(n.throw(e))
                } catch (e) {
                    o(e)
                }
            }

            function s(e) {
                var t;
                e.done ? a(e.value) : (t = e.value, t instanceof r ? t : new r(function(e) {
                    e(t)
                })).then(i, _)
            }
            s((n = n.apply(e, t || [])).next())
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
            next: _(0),
            throw: _(1),
            return: _(2)
        }, "function" == typeof Symbol && (o[Symbol.iterator] = function() {
            return this
        }), o;

        function _(o) {
            return function(_) {
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
                }([o, _])
            }
        }
    },
    __read = this && this.__read || function(e, t) {
        var r = "function" == typeof Symbol && e[Symbol.iterator];
        if (!r) return e;
        var n, a, o = r.call(e),
            i = [];
        try {
            for (;
                (void 0 === t || t-- > 0) && !(n = o.next()).done;) i.push(n.value)
        } catch (e) {
            a = {
                error: e
            }
        } finally {
            try {
                n && !n.done && (r = o.return) && r.call(o)
            } finally {
                if (a) throw a.error
            }
        }
        return i
    },
    __spread = this && this.__spread || function() {
        for (var e = [], t = 0; t < arguments.length; t++) e = e.concat(__read(arguments[t]));
        return e
    };
Object.defineProperty(exports, "__esModule", {
    value: !0
}), exports.getLegacyIntegrations = exports.getAllIntegrations = void 0;
var get_and_format_duo_1 = require("./helpers/get_and_format_duo"),
    get_and_format_masked_emails_1 = require("./helpers/get_and_format_masked_emails"),
    get_and_format_service_accounts_1 = require("./helpers/get_and_format_service_accounts"),
    get_and_format_slack_app_1 = require("./helpers/get_and_format_slack_app"),
    get_legacy_provision_manager_1 = require("./helpers/get_legacy_provision_manager"),
    getAllIntegrations = function(e) {
        return __awaiter(void 0, void 0, void 0, function() {
            var t, r, n, a, o;
            return __generator(this, function(i) {
                switch (i.label) {
                    case 0:
                        return [4, Promise.all([get_and_format_service_accounts_1.getAndFormatServiceAccounts(e), get_and_format_slack_app_1.getAndFormatSlackApp(e), get_and_format_duo_1.getAndFormatDuo(e), get_and_format_masked_emails_1.getAndFormatMaskedEmails(e)])];
                    case 1:
                        return t = __read.apply(void 0, [i.sent(), 4]), r = t[0], n = t[1], a = t[2], o = t[3], n && r.push(n), a && r.push(a), [2, __spread(r, o)]
                }
            })
        })
    };
exports.getAllIntegrations = getAllIntegrations;
var getLegacyIntegrations = function(e) {
    return __awaiter(void 0, void 0, void 0, function() {
        return __generator(this, function(t) {
            switch (t.label) {
                case 0:
                    return [4, get_legacy_provision_manager_1.getLegacyProvisionManager(e)];
                case 1:
                    return [2, t.sent()]
            }
        })
    })
};
exports.getLegacyIntegrations = getLegacyIntegrations;