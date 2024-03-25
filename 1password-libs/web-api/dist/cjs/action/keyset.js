"use strict";
var __createBinding = this && this.__createBinding || (Object.create ? function(e, t, r, n) {
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
        return new(r || (r = Promise))(function(o, s) {
            function i(e) {
                try {
                    u(n.next(e))
                } catch (e) {
                    s(e)
                }
            }

            function c(e) {
                try {
                    u(n.throw(e))
                } catch (e) {
                    s(e)
                }
            }

            function u(e) {
                var t;
                e.done ? o(e.value) : (t = e.value, t instanceof r ? t : new r(function(e) {
                    e(t)
                })).then(i, c)
            }
            u((n = n.apply(e, t || [])).next())
        })
    },
    __generator = this && this.__generator || function(e, t) {
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
            next: c(0),
            throw: c(1),
            return: c(2)
        }, "function" == typeof Symbol && (s[Symbol.iterator] = function() {
            return this
        }), s;

        function c(s) {
            return function(c) {
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
                        s = t.call(e, i)
                    } catch (e) {
                        s = [6, e], n = 0
                    } finally {
                        r = o = 0
                    }
                    if (5 & s[0]) throw s[1];
                    return {
                        value: s[0] ? s[1] : void 0,
                        done: !0
                    }
                }([s, c])
            }
        }
    },
    __read = this && this.__read || function(e, t) {
        var r = "function" == typeof Symbol && e[Symbol.iterator];
        if (!r) return e;
        var n, o, s = r.call(e),
            i = [];
        try {
            for (;
                (void 0 === t || t-- > 0) && !(n = s.next()).done;) i.push(n.value)
        } catch (e) {
            o = {
                error: e
            }
        } finally {
            try {
                n && !n.done && (r = s.return) && r.call(s)
            } finally {
                if (o) throw o.error
            }
        }
        return i
    },
    __spread = this && this.__spread || function() {
        for (var e = [], t = 0; t < arguments.length; t++) e = e.concat(__read(arguments[t]));
        return e
    },
    __values = this && this.__values || function(e) {
        var t = "function" == typeof Symbol && Symbol.iterator,
            r = t && e[t],
            n = 0;
        if (r) return r.call(e);
        if (e && "number" == typeof e.length) return {
            next: function() {
                return e && n >= e.length && (e = void 0), {
                    value: e && e[n++],
                    done: !e
                }
            }
        };
        throw new TypeError(t ? "Object is not iterable." : "Symbol.iterator is not defined.")
    };
Object.defineProperty(exports, "__esModule", {
    value: !0
}), exports.refreshKeysets = exports.refreshKeysetsIfNecessary = exports.findDecryptedKeyset = exports.decryptKeysets = exports.saveDecryptedKeysets = void 0;
var lodash_es_1 = require("lodash-es"),
    keyset_1 = require("../api/keyset"),
    model = __importStar(require("../model")),
    symmetric_key_1 = require("../model/symmetric_key"),
    make_promise_1 = require("../util/make_promise"),
    account_overview_1 = require("./account_overview"),
    context_cache_1 = require("./context_cache"),
    codeLocation = "action/keyset",
    makePromise = make_promise_1.makePromise(codeLocation),
    saveDecryptedKeysets = function(e, t) {
        var r = lodash_es_1.keyBy(t, "uuid");
        context_cache_1.getContextCache(e, "keysets").saveEntries(r)
    };
exports.saveDecryptedKeysets = saveDecryptedKeysets;
var decryptKeysets = function(e, t) {
    return makePromise("decryptKeysets", function() {
        var r, n, o = e.user && e.user.masterKey,
            s = lodash_es_1.keyBy(t, function(e) {
                return e.uuid
            }),
            i = context_cache_1.getContextCache(e, "keysets"),
            c = Promise.resolve([]),
            u = function(t) {
                c = c.then(function(r) {
                    return getDecryptedKeyset(t.uuid, s, i, o).then(function(n) {
                        return e.user && "mp" === t.encryptedBy && (e.user.activeKeyset = n, e.user.pubKey = n.ekeyPair.pubKey), __spread(r, [n])
                    })
                })
            };
        try {
            for (var a = __values(t), y = a.next(); !y.done; y = a.next()) {
                u(y.value)
            }
        } catch (e) {
            r = {
                error: e
            }
        } finally {
            try {
                y && !y.done && (n = a.return) && n.call(a)
            } finally {
                if (r) throw r.error
            }
        }
        return c
    })
};
exports.decryptKeysets = decryptKeysets;
var findDecryptedKeyset = function(e, t) {
    return context_cache_1.getContextCache(e, "keysets").getEntry(t)
};
exports.findDecryptedKeyset = findDecryptedKeyset;
var getDecryptedKeyset = function(e, t, r, n, o) {
        return void 0 === o && (o = 0), makePromise("getDecryptedKeyset", function() {
            if (o > 50) throw new Error("Infinite loop!");
            var s = r.getEntry(e);
            if (s) return s;
            var i = t[e];
            if (i) return decryptKeysetFindParent(i, t, r, n, o + 1).then(function(e) {
                return r.saveEntry(e.uuid, e), e
            });
            throw new Error("Could not find keyset. <" + e + ">")
        })
    },
    decryptKeysetFindParent = function(e, t, r, n, o) {
        return void 0 === o && (o = 0), makePromise("decryptKeysetFindParent", function() {
            if ("mp" === e.encryptedBy) return n ? model.Keyset.decryptWithKey(n, e) : Promise.reject(new Error("Missing master key"));
            var s = e.encryptedBy || e.encSymKey.kid;
            if (!s) throw new Error("Missing encryptedBy.");
            if (s === e.uuid) throw new Error("Keyset is self-encrypted.");
            return getDecryptedKeyset(s, t, r, n, o).then(function(t) {
                return model.Keyset.decryptWithKeyset(t, e)
            })
        })
    },
    refreshKeysetsIfNecessary = function(e) {
        return __awaiter(void 0, void 0, void 0, function() {
            var t, r;
            return __generator(this, function(n) {
                switch (n.label) {
                    case 0:
                        return t = e.accountOverview, r = e, [4, account_overview_1.getAccountOverview(e)];
                    case 1:
                        return r.accountOverview = n.sent(), !t || e.accountOverview && e.accountOverview.keysetVersion !== t.keysetVersion ? [2, exports.refreshKeysets(e)] : [2]
                }
            })
        })
    };
exports.refreshKeysetsIfNecessary = refreshKeysetsIfNecessary;
var refreshKeysets = function(e) {
    return makePromise("refreshKeysets", function() {
        return keyset_1.getKeysets(e.session).then(function(t) {
            var r = t.keysets;
            return function() {
                if (!e.user) return Promise.reject(new Error("Missing user."));
                if (e.user.masterKey) return Promise.resolve();
                var t = r.find(function(e) {
                        return e.encryptedBy === model.KID_MASTER_PASSWORD
                    }),
                    n = symmetric_key_1.extractDerivationInfo(t.encSymKey);
                return e.user.deriveMasterKey(n)
            }().then(function() {
                return exports.decryptKeysets(e, r)
            })
        })
    })
};
exports.refreshKeysets = refreshKeysets;