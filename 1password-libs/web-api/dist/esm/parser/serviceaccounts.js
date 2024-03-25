var __assign = this && this.__assign || function() {
        return (__assign = Object.assign || function(e) {
            for (var t, r = 1, n = arguments.length; r < n; r++)
                for (var a in t = arguments[r]) Object.prototype.hasOwnProperty.call(t, a) && (e[a] = t[a]);
            return e
        }).apply(this, arguments)
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

            function s(e) {
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
                })).then(i, s)
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
            next: s(0),
            throw: s(1),
            return: s(2)
        }, "function" == typeof Symbol && (o[Symbol.iterator] = function() {
            return this
        }), o;

        function s(o) {
            return function(s) {
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
                }([o, s])
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
import * as model from "../model";
import {
    makePromise as mp
} from "../util/make_promise";
import {
    dateFromAPI
} from "./date";
var codeLocation = "parser/serviceaccounts",
    makePromise = mp(codeLocation);
export var parseServiceAccount = function(e, t, r) {
    return void 0 === t && (t = 0), __awaiter(void 0, void 0, void 0, function() {
        return __generator(this, function(n) {
            return [2, makePromise("parseServiceAccount", function() {
                return __awaiter(void 0, void 0, void 0, function() {
                    var n, a;
                    return __generator(this, function(o) {
                        return n = mapResponseToAttrs(e), (a = r ? new model.ServiceAccountUser(__assign(__assign({}, r), n)) : new model.ServiceAccountUser(n)).addAttrMask(t), e.tokens && e.tokens.length > 0 && (a.tokens = __spread(e.tokens)), [2, a]
                    })
                })
            })]
        })
    })
};
var mapResponseToAttrs = function(e) {
    return {
        uuid: e.uuid,
        name: e.name,
        state: e.state,
        type: e.type,
        attrVersion: e.attrVersion,
        keysetVersion: e.keysetVersion,
        language: e.language,
        avatar: e.avatar,
        combinedPermissions: e.combinedPermissions,
        newsletterPrefs: e.newsletterPrefs,
        preferences: e.preferences,
        externalGUID: e.externalGUID || "",
        email: e.email,
        createdAt: dateFromAPI(e.createdAt),
        updatedAt: dateFromAPI(e.updatedAt),
        lastAuthAt: dateFromAPI(e.lastAuthAt),
        creatorUuid: e.creatorUuid,
        serviceAccountType: e.serviceAccountType,
        activities: e.activities ? e.activities.map(model.Activity.fromLegacyApi) : void 0,
        serviceAccountVaultAccess: e.serviceAccountVaultAccess ? parseServiceAccountVaultAccess(e.serviceAccountVaultAccess) : void 0,
        billables: e.billables
    }
};
export var serviceAccountToApi = function(e) {
    return {
        uuid: e.uuid,
        name: e.name,
        state: e.state,
        type: e.type,
        attrVersion: e.attrVersion,
        keysetVersion: e.keysetVersion,
        language: e.language,
        avatar: e.avatar,
        combinedPermissions: e.combinedPermissions,
        newsletterPrefs: e.newsletterPrefs,
        preferences: e.preferences,
        externalGUID: e.externalGUID || "",
        email: e.email,
        creatorUuid: e.creatorUuid,
        serviceAccountType: e.serviceAccountType
    }
};
var parseServiceAccountVaultAccess = function(e) {
    return {
        totalVaults: e.totalVaults,
        displayable: e.displayable.map(function(e) {
            return new model.VaultAccess(e)
        })
    }
};