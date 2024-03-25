"use strict";
var __createBinding = this && this.__createBinding || (Object.create ? function(t, e, r, n) {
        void 0 === n && (n = r), Object.defineProperty(t, n, {
            enumerable: !0,
            get: function() {
                return e[r]
            }
        })
    } : function(t, e, r, n) {
        void 0 === n && (n = r), t[n] = e[r]
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
            for (var r in t) "default" !== r && Object.prototype.hasOwnProperty.call(t, r) && __createBinding(e, t, r);
        return __setModuleDefault(e, t), e
    },
    __awaiter = this && this.__awaiter || function(t, e, r, n) {
        return new(r || (r = Promise))(function(o, s) {
            function i(t) {
                try {
                    c(n.next(t))
                } catch (t) {
                    s(t)
                }
            }

            function a(t) {
                try {
                    c(n.throw(t))
                } catch (t) {
                    s(t)
                }
            }

            function c(t) {
                var e;
                t.done ? o(t.value) : (e = t.value, e instanceof r ? e : new r(function(t) {
                    t(e)
                })).then(i, a)
            }
            c((n = n.apply(t, e || [])).next())
        })
    },
    __generator = this && this.__generator || function(t, e) {
        var r, n, o, s, i = {
            label: 0,
            sent: function() {
                if (1 & o[0]) throw o[1];
                return o[1]
            },
            trys: [],
            ops: []
        };
        return s = {
            next: a(0),
            throw: a(1),
            return: a(2)
        }, "function" == typeof Symbol && (s[Symbol.iterator] = function() {
            return this
        }), s;

        function a(s) {
            return function(a) {
                return function(s) {
                    if (r) throw new TypeError("Generator is already executing.");
                    for (; i;) try {
                        if (r = 1, n && (o = 2 & s[0] ? n.return : s[0] ? n.throw || ((o = n.return) && o.call(n), 0) : n.next) && !(o = o.call(n, s[1])).done) return o;
                        switch (n = 0, o && (s = [2 & s[0], o.value]), s[0]) {
                            case 0:
                            case 1:
                                o = s;
                                break;
                            case 4:
                                return i.label++, {
                                    value: s[1],
                                    done: !1
                                };
                            case 5:
                                i.label++, n = s[1], s = [0];
                                continue;
                            case 7:
                                s = i.ops.pop(), i.trys.pop();
                                continue;
                            default:
                                if (!(o = (o = i.trys).length > 0 && o[o.length - 1]) && (6 === s[0] || 2 === s[0])) {
                                    i = 0;
                                    continue
                                }
                                if (3 === s[0] && (!o || s[1] > o[0] && s[1] < o[3])) {
                                    i.label = s[1];
                                    break
                                }
                                if (6 === s[0] && i.label < o[1]) {
                                    i.label = o[1], o = s;
                                    break
                                }
                                if (o && i.label < o[2]) {
                                    i.label = o[2], i.ops.push(s);
                                    break
                                }
                                o[2] && i.ops.pop(), i.trys.pop();
                                continue
                        }
                        s = e.call(t, i)
                    } catch (t) {
                        s = [6, t], n = 0
                    } finally {
                        r = o = 0
                    }
                    if (5 & s[0]) throw s[1];
                    return {
                        value: s[0] ? s[1] : void 0,
                        done: !0
                    }
                }([s, a])
            }
        }
    };
Object.defineProperty(exports, "__esModule", {
    value: !0
}), exports.getTwoFactorSitesList = exports.getWatchtowerData = exports.getCommonPasswordsList = exports.getPassphraseWordList = exports.convertPwnedApiResponseToHashes = exports.getPwnedHashList = void 0;
var Qwest = __importStar(require("qwest")),
    util_1 = require("../util"),
    get = function(t, e, r) {
        return __awaiter(void 0, void 0, void 0, function() {
            return __generator(this, function(n) {
                return [2, new Promise(function(n, o) {
                    Qwest.get(t, e, r).then(function(t, e) {
                        n(e)
                    }).catch(o)
                })]
            })
        })
    },
    getPwnedHashList = function(t) {
        return get("https://api.pwnedpasswords.com/range/" + t, void 0, {
            responseType: "text",
            timeout: 5e3,
            cache: !0
        }).then(exports.convertPwnedApiResponseToHashes(t))
    };
exports.getPwnedHashList = getPwnedHashList;
var convertPwnedApiResponseToHashes = function(t) {
    return function(e) {
        return e.trim().split("\n").map(function(e) {
            return "" + t + e.slice(0, 35)
        })
    }
};
exports.convertPwnedApiResponseToHashes = convertPwnedApiResponseToHashes;
var getPassphraseWordList = function(t) {
    return get(util_1.joinPath(t, "generator/combined_words.txt"), void 0, {
        responseType: "text"
    }).then(function(t) {
        return t.trim().split("\n")
    })
};
exports.getPassphraseWordList = getPassphraseWordList;
var getCommonPasswordsList = function(t) {
    return get(util_1.joinPath(t, "banlist/combined_words.txt"), void 0, {
        responseType: "text"
    }).then(function(t) {
        return t.trim().split("\n")
    })
};
exports.getCommonPasswordsList = getCommonPasswordsList;
var getWatchtowerData = function() {
    return get("https://watchtower.1password.com/api/v1/compromised-sites", void 0, {
        cache: !0
    })
};
exports.getWatchtowerData = getWatchtowerData;
var getTwoFactorSitesList = function() {
    return get("https://watchtower.1password.com/api/v1/2fa-sites", void 0, {
        cache: !0
    })
};
exports.getTwoFactorSitesList = getTwoFactorSitesList;