"use strict";
var __createBinding = this && this.__createBinding || (Object.create ? function(t, e, o, s) {
        void 0 === s && (s = o), Object.defineProperty(t, s, {
            enumerable: !0,
            get: function() {
                return e[o]
            }
        })
    } : function(t, e, o, s) {
        void 0 === s && (s = o), t[s] = e[o]
    }),
    __setModuleDefault = this && this.__setModuleDefault || (Object.create ? function(t, e) {
        Object.defineProperty(t, "default", {
            enumerable: !0,
            value: e
        })
    } : function(t, e) {
        t.default = e
    }),
    __importStar = this && this.__importStar || function(t) {
        if (t && t.__esModule) return t;
        var e = {};
        if (null != t)
            for (var o in t) "default" !== o && Object.prototype.hasOwnProperty.call(t, o) && __createBinding(e, t, o);
        return __setModuleDefault(e, t), e
    },
    __awaiter = this && this.__awaiter || function(t, e, o, s) {
        return new(o || (o = Promise))(function(r, a) {
            function i(t) {
                try {
                    c(s.next(t))
                } catch (t) {
                    a(t)
                }
            }

            function n(t) {
                try {
                    c(s.throw(t))
                } catch (t) {
                    a(t)
                }
            }

            function c(t) {
                var e;
                t.done ? r(t.value) : (e = t.value, e instanceof o ? e : new o(function(t) {
                    t(e)
                })).then(i, n)
            }
            c((s = s.apply(t, e || [])).next())
        })
    },
    __generator = this && this.__generator || function(t, e) {
        var o, s, r, a, i = {
            label: 0,
            sent: function() {
                if (1 & r[0]) throw r[1];
                return r[1]
            },
            trys: [],
            ops: []
        };
        return a = {
            next: n(0),
            throw: n(1),
            return: n(2)
        }, "function" == typeof Symbol && (a[Symbol.iterator] = function() {
            return this
        }), a;

        function n(a) {
            return function(n) {
                return function(a) {
                    if (o) throw new TypeError("Generator is already executing.");
                    for (; i;) try {
                        if (o = 1, s && (r = 2 & a[0] ? s.return : a[0] ? s.throw || ((r = s.return) && r.call(s), 0) : s.next) && !(r = r.call(s, a[1])).done) return r;
                        switch (s = 0, r && (a = [2 & a[0], r.value]), a[0]) {
                            case 0:
                            case 1:
                                r = a;
                                break;
                            case 4:
                                return i.label++, {
                                    value: a[1],
                                    done: !1
                                };
                            case 5:
                                i.label++, s = a[1], a = [0];
                                continue;
                            case 7:
                                a = i.ops.pop(), i.trys.pop();
                                continue;
                            default:
                                if (!(r = (r = i.trys).length > 0 && r[r.length - 1]) && (6 === a[0] || 2 === a[0])) {
                                    i = 0;
                                    continue
                                }
                                if (3 === a[0] && (!r || a[1] > r[0] && a[1] < r[3])) {
                                    i.label = a[1];
                                    break
                                }
                                if (6 === a[0] && i.label < r[1]) {
                                    i.label = r[1], r = a;
                                    break
                                }
                                if (r && i.label < r[2]) {
                                    i.label = r[2], i.ops.push(a);
                                    break
                                }
                                r[2] && i.ops.pop(), i.trys.pop();
                                continue
                        }
                        a = e.call(t, i)
                    } catch (t) {
                        a = [6, t], s = 0
                    } finally {
                        o = r = 0
                    }
                    if (5 & a[0]) throw a[1];
                    return {
                        value: a[0] ? a[1] : void 0,
                        done: !0
                    }
                }([a, n])
            }
        }
    };
Object.defineProperty(exports, "__esModule", {
    value: !0
}), exports.unloadTwoFactorSitesList = exports.loadTwoFactorSitesList = exports.unloadWatchtowerData = exports.loadWatchtowerData = exports.unloadCommonPasswordsList = exports.loadCommonPasswordsList = exports.unloadPassphraseWordList = exports.loadPassphraseWordList = exports.getTwoFactorSitesList = exports.getWatchtowerData = exports._checkPwnedPasswords = exports.checkPwnedPasswords = void 0;
var passphraseWordList, commonPasswordsList, watchtowerData, twoFactorSitesList, lodash_es_1 = require("lodash-es"),
    api = __importStar(require("../api")),
    util = __importStar(require("../util")),
    make_promise_1 = require("../util/make_promise"),
    codeLocation = "action/text",
    vulnerablePasswordsCache = {},
    checkPwnedPasswords = function(t) {
        return make_promise_1.makePromise(codeLocation)("checkPwnedPasswords", function() {
            return exports._checkPwnedPasswords(t, api.getPwnedHashList)
        })
    };
exports.checkPwnedPasswords = checkPwnedPasswords;
var _checkPwnedPasswords = function(t, e) {
    return __awaiter(void 0, void 0, void 0, function() {
        var o, s, r, a, i;
        return __generator(this, function(n) {
            switch (n.label) {
                case 0:
                    return [4, util.crypto.unsafeHashStringSha1UpperHex(t)];
                case 1:
                    return o = n.sent(), void 0 === (s = vulnerablePasswordsCache[o]) ? [3, 2] : [2, s];
                case 2:
                    return r = o.slice(0, 5), [4, e(r)];
                case 3:
                    return a = n.sent(), i = lodash_es_1.includes(a, o), vulnerablePasswordsCache[o] = i, [2, i]
            }
        })
    })
};
exports._checkPwnedPasswords = _checkPwnedPasswords;
var getWatchtowerData = function() {
    return watchtowerData || {}
};
exports.getWatchtowerData = getWatchtowerData;
var getTwoFactorSitesList = function() {
    return twoFactorSitesList || {}
};
exports.getTwoFactorSitesList = getTwoFactorSitesList;
var loadPassphraseWordList = function(t) {
    return __awaiter(void 0, void 0, void 0, function() {
        return __generator(this, function(e) {
            switch (e.label) {
                case 0:
                    return passphraseWordList ? [2] : [4, api.getPassphraseWordList(t.config.txtBase)];
                case 1:
                    return passphraseWordList = e.sent(), util.setPassphraseWordList(passphraseWordList), [2]
            }
        })
    })
};
exports.loadPassphraseWordList = loadPassphraseWordList;
var unloadPassphraseWordList = function() {
    passphraseWordList = void 0, util.setPassphraseWordList(void 0)
};
exports.unloadPassphraseWordList = unloadPassphraseWordList;
var loadCommonPasswordsList = function(t) {
    return __awaiter(void 0, void 0, void 0, function() {
        return __generator(this, function(e) {
            switch (e.label) {
                case 0:
                    return commonPasswordsList ? [3, 2] : [4, api.getCommonPasswordsList(t.config.txtBase)];
                case 1:
                    commonPasswordsList = e.sent(), util.setCommonPasswordsList(commonPasswordsList), e.label = 2;
                case 2:
                    return [2, commonPasswordsList]
            }
        })
    })
};
exports.loadCommonPasswordsList = loadCommonPasswordsList;
var unloadCommonPasswordsList = function() {
    commonPasswordsList = void 0, util.setCommonPasswordsList(void 0)
};
exports.unloadCommonPasswordsList = unloadCommonPasswordsList;
var loadWatchtowerData = function() {
    return __awaiter(void 0, void 0, void 0, function() {
        return __generator(this, function(t) {
            switch (t.label) {
                case 0:
                    return watchtowerData ? [2] : [4, api.getWatchtowerData()];
                case 1:
                    return watchtowerData = t.sent(), [2]
            }
        })
    })
};
exports.loadWatchtowerData = loadWatchtowerData;
var unloadWatchtowerData = function() {
    watchtowerData = void 0
};
exports.unloadWatchtowerData = unloadWatchtowerData;
var loadTwoFactorSitesList = function() {
    return make_promise_1.makePromise(codeLocation)("loadTwoFactorSitesList", function() {
        if (!twoFactorSitesList) return api.getTwoFactorSitesList().then(function(t) {
            twoFactorSitesList = t
        })
    })
};
exports.loadTwoFactorSitesList = loadTwoFactorSitesList;
var unloadTwoFactorSitesList = function() {
    twoFactorSitesList = void 0
};
exports.unloadTwoFactorSitesList = unloadTwoFactorSitesList;