var __awaiter = this && this.__awaiter || function(t, r, e, o) {
        return new(e || (e = Promise))(function(a, s) {
            function n(t) {
                try {
                    c(o.next(t))
                } catch (t) {
                    s(t)
                }
            }

            function i(t) {
                try {
                    c(o.throw(t))
                } catch (t) {
                    s(t)
                }
            }

            function c(t) {
                var r;
                t.done ? a(t.value) : (r = t.value, r instanceof e ? r : new e(function(t) {
                    t(r)
                })).then(n, i)
            }
            c((o = o.apply(t, r || [])).next())
        })
    },
    __generator = this && this.__generator || function(t, r) {
        var e, o, a, s, n = {
            label: 0,
            sent: function() {
                if (1 & a[0]) throw a[1];
                return a[1]
            },
            trys: [],
            ops: []
        };
        return s = {
            next: i(0),
            throw: i(1),
            return: i(2)
        }, "function" == typeof Symbol && (s[Symbol.iterator] = function() {
            return this
        }), s;

        function i(s) {
            return function(i) {
                return function(s) {
                    if (e) throw new TypeError("Generator is already executing.");
                    for (; n;) try {
                        if (e = 1, o && (a = 2 & s[0] ? o.return : s[0] ? o.throw || ((a = o.return) && a.call(o), 0) : o.next) && !(a = a.call(o, s[1])).done) return a;
                        switch (o = 0, a && (s = [2 & s[0], a.value]), s[0]) {
                            case 0:
                            case 1:
                                a = s;
                                break;
                            case 4:
                                return n.label++, {
                                    value: s[1],
                                    done: !1
                                };
                            case 5:
                                n.label++, o = s[1], s = [0];
                                continue;
                            case 7:
                                s = n.ops.pop(), n.trys.pop();
                                continue;
                            default:
                                if (!(a = (a = n.trys).length > 0 && a[a.length - 1]) && (6 === s[0] || 2 === s[0])) {
                                    n = 0;
                                    continue
                                }
                                if (3 === s[0] && (!a || s[1] > a[0] && s[1] < a[3])) {
                                    n.label = s[1];
                                    break
                                }
                                if (6 === s[0] && n.label < a[1]) {
                                    n.label = a[1], a = s;
                                    break
                                }
                                if (a && n.label < a[2]) {
                                    n.label = a[2], n.ops.push(s);
                                    break
                                }
                                a[2] && n.ops.pop(), n.trys.pop();
                                continue
                        }
                        s = r.call(t, n)
                    } catch (t) {
                        s = [6, t], o = 0
                    } finally {
                        e = a = 0
                    }
                    if (5 & s[0]) throw s[1];
                    return {
                        value: s[0] ? s[1] : void 0,
                        done: !0
                    }
                }([s, i])
            }
        }
    };
import {
    includes
} from "lodash-es";
import * as api from "../api";
import * as util from "../util";
import {
    makePromise
} from "../util/make_promise";
var passphraseWordList, commonPasswordsList, watchtowerData, twoFactorSitesList, codeLocation = "action/text",
    vulnerablePasswordsCache = {};
export var checkPwnedPasswords = function(t) {
    return makePromise(codeLocation)("checkPwnedPasswords", function() {
        return _checkPwnedPasswords(t, api.getPwnedHashList)
    })
};
export var _checkPwnedPasswords = function(t, r) {
    return __awaiter(void 0, void 0, void 0, function() {
        var e, o, a, s, n;
        return __generator(this, function(i) {
            switch (i.label) {
                case 0:
                    return [4, util.crypto.unsafeHashStringSha1UpperHex(t)];
                case 1:
                    return e = i.sent(), void 0 === (o = vulnerablePasswordsCache[e]) ? [3, 2] : [2, o];
                case 2:
                    return a = e.slice(0, 5), [4, r(a)];
                case 3:
                    return s = i.sent(), n = includes(s, e), vulnerablePasswordsCache[e] = n, [2, n]
            }
        })
    })
};
export var getWatchtowerData = function() {
    return watchtowerData || {}
};
export var getTwoFactorSitesList = function() {
    return twoFactorSitesList || {}
};
export var loadPassphraseWordList = function(t) {
    return __awaiter(void 0, void 0, void 0, function() {
        return __generator(this, function(r) {
            switch (r.label) {
                case 0:
                    return passphraseWordList ? [2] : [4, api.getPassphraseWordList(t.config.txtBase)];
                case 1:
                    return passphraseWordList = r.sent(), util.setPassphraseWordList(passphraseWordList), [2]
            }
        })
    })
};
export var unloadPassphraseWordList = function() {
    passphraseWordList = void 0, util.setPassphraseWordList(void 0)
};
export var loadCommonPasswordsList = function(t) {
    return __awaiter(void 0, void 0, void 0, function() {
        return __generator(this, function(r) {
            switch (r.label) {
                case 0:
                    return commonPasswordsList ? [3, 2] : [4, api.getCommonPasswordsList(t.config.txtBase)];
                case 1:
                    commonPasswordsList = r.sent(), util.setCommonPasswordsList(commonPasswordsList), r.label = 2;
                case 2:
                    return [2, commonPasswordsList]
            }
        })
    })
};
export var unloadCommonPasswordsList = function() {
    commonPasswordsList = void 0, util.setCommonPasswordsList(void 0)
};
export var loadWatchtowerData = function() {
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
export var unloadWatchtowerData = function() {
    watchtowerData = void 0
};
export var loadTwoFactorSitesList = function() {
    return makePromise(codeLocation)("loadTwoFactorSitesList", function() {
        if (!twoFactorSitesList) return api.getTwoFactorSitesList().then(function(t) {
            twoFactorSitesList = t
        })
    })
};
export var unloadTwoFactorSitesList = function() {
    twoFactorSitesList = void 0
};