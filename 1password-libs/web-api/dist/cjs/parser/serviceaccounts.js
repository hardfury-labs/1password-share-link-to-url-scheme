"use strict";
var __assign = this && this.__assign || function() {
        return (__assign = Object.assign || function(e) {
            for (var t, r = 1, n = arguments.length; r < n; r++)
                for (var a in t = arguments[r]) Object.prototype.hasOwnProperty.call(t, a) && (e[a] = t[a]);
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
        return new(r || (r = Promise))(function(a, i) {
            function o(e) {
                try {
                    s(n.next(e))
                } catch (e) {
                    i(e)
                }
            }

            function c(e) {
                try {
                    s(n.throw(e))
                } catch (e) {
                    i(e)
                }
            }

            function s(e) {
                var t;
                e.done ? a(e.value) : (t = e.value, t instanceof r ? t : new r(function(e) {
                    e(t)
                })).then(o, c)
            }
            s((n = n.apply(e, t || [])).next())
        })
    },
    __generator = this && this.__generator || function(e, t) {
        var r, n, a, i, o = {
            label: 0,
            sent: function() {
                if (1 & a[0]) throw a[1];
                return a[1]
            },
            trys: [],
            ops: []
        };
        return i = {
            next: c(0),
            throw: c(1),
            return: c(2)
        }, "function" == typeof Symbol && (i[Symbol.iterator] = function() {
            return this
        }), i;

        function c(i) {
            return function(c) {
                return function(i) {
                    if (r) throw new TypeError("Generator is already executing.");
                    for (; o;) try {
                        if (r = 1, n && (a = 2 & i[0] ? n.return : i[0] ? n.throw || ((a = n.return) && a.call(n), 0) : n.next) && !(a = a.call(n, i[1])).done) return a;
                        switch (n = 0, a && (i = [2 & i[0], a.value]), i[0]) {
                            case 0:
                            case 1:
                                a = i;
                                break;
                            case 4:
                                return o.label++, {
                                    value: i[1],
                                    done: !1
                                };
                            case 5:
                                o.label++, n = i[1], i = [0];
                                continue;
                            case 7:
                                i = o.ops.pop(), o.trys.pop();
                                continue;
                            default:
                                if (!(a = (a = o.trys).length > 0 && a[a.length - 1]) && (6 === i[0] || 2 === i[0])) {
                                    o = 0;
                                    continue
                                }
                                if (3 === i[0] && (!a || i[1] > a[0] && i[1] < a[3])) {
                                    o.label = i[1];
                                    break
                                }
                                if (6 === i[0] && o.label < a[1]) {
                                    o.label = a[1], a = i;
                                    break
                                }
                                if (a && o.label < a[2]) {
                                    o.label = a[2], o.ops.push(i);
                                    break
                                }
                                a[2] && o.ops.pop(), o.trys.pop();
                                continue
                        }
                        i = t.call(e, o)
                    } catch (e) {
                        i = [6, e], n = 0
                    } finally {
                        r = a = 0
                    }
                    if (5 & i[0]) throw i[1];
                    return {
                        value: i[0] ? i[1] : void 0,
                        done: !0
                    }
                }([i, c])
            }
        }
    },
    __read = this && this.__read || function(e, t) {
        var r = "function" == typeof Symbol && e[Symbol.iterator];
        if (!r) return e;
        var n, a, i = r.call(e),
            o = [];
        try {
            for (;
                (void 0 === t || t-- > 0) && !(n = i.next()).done;) o.push(n.value)
        } catch (e) {
            a = {
                error: e
            }
        } finally {
            try {
                n && !n.done && (r = i.return) && r.call(i)
            } finally {
                if (a) throw a.error
            }
        }
        return o
    },
    __spread = this && this.__spread || function() {
        for (var e = [], t = 0; t < arguments.length; t++) e = e.concat(__read(arguments[t]));
        return e
    };
Object.defineProperty(exports, "__esModule", {
    value: !0
}), exports.serviceAccountToApi = exports.parseServiceAccount = void 0;
var model = __importStar(require("../model")),
    make_promise_1 = require("../util/make_promise"),
    date_1 = require("./date"),
    codeLocation = "parser/serviceaccounts",
    makePromise = make_promise_1.makePromise(codeLocation),
    parseServiceAccount = function(e, t, r) {
        return void 0 === t && (t = 0), __awaiter(void 0, void 0, void 0, function() {
            return __generator(this, function(n) {
                return [2, makePromise("parseServiceAccount", function() {
                    return __awaiter(void 0, void 0, void 0, function() {
                        var n, a;
                        return __generator(this, function(i) {
                            return n = mapResponseToAttrs(e), (a = r ? new model.ServiceAccountUser(__assign(__assign({}, r), n)) : new model.ServiceAccountUser(n)).addAttrMask(t), e.tokens && e.tokens.length > 0 && (a.tokens = __spread(e.tokens)), [2, a]
                        })
                    })
                })]
            })
        })
    };
exports.parseServiceAccount = parseServiceAccount;
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
            createdAt: date_1.dateFromAPI(e.createdAt),
            updatedAt: date_1.dateFromAPI(e.updatedAt),
            lastAuthAt: date_1.dateFromAPI(e.lastAuthAt),
            creatorUuid: e.creatorUuid,
            serviceAccountType: e.serviceAccountType,
            activities: e.activities ? e.activities.map(model.Activity.fromLegacyApi) : void 0,
            serviceAccountVaultAccess: e.serviceAccountVaultAccess ? parseServiceAccountVaultAccess(e.serviceAccountVaultAccess) : void 0,
            billables: e.billables
        }
    },
    serviceAccountToApi = function(e) {
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
exports.serviceAccountToApi = serviceAccountToApi;
var parseServiceAccountVaultAccess = function(e) {
    return {
        totalVaults: e.totalVaults,
        displayable: e.displayable.map(function(e) {
            return new model.VaultAccess(e)
        })
    }
};