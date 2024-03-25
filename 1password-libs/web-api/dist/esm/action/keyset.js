var __awaiter = this && this.__awaiter || function(e, r, t, n) {
        return new(t || (t = Promise))(function(o, i) {
            function s(e) {
                try {
                    u(n.next(e))
                } catch (e) {
                    i(e)
                }
            }

            function a(e) {
                try {
                    u(n.throw(e))
                } catch (e) {
                    i(e)
                }
            }

            function u(e) {
                var r;
                e.done ? o(e.value) : (r = e.value, r instanceof t ? r : new t(function(e) {
                    e(r)
                })).then(s, a)
            }
            u((n = n.apply(e, r || [])).next())
        })
    },
    __generator = this && this.__generator || function(e, r) {
        var t, n, o, i, s = {
            label: 0,
            sent: function() {
                if (1 & o[0]) throw o[1];
                return o[1]
            },
            trys: [],
            ops: []
        };
        return i = {
            next: a(0),
            throw: a(1),
            return: a(2)
        }, "function" == typeof Symbol && (i[Symbol.iterator] = function() {
            return this
        }), i;

        function a(i) {
            return function(a) {
                return function(i) {
                    if (t) throw new TypeError("Generator is already executing.");
                    for (; s;) try {
                        if (t = 1, n && (o = 2 & i[0] ? n.return : i[0] ? n.throw || ((o = n.return) && o.call(n), 0) : n.next) && !(o = o.call(n, i[1])).done) return o;
                        switch (n = 0, o && (i = [2 & i[0], o.value]), i[0]) {
                            case 0:
                            case 1:
                                o = i;
                                break;
                            case 4:
                                return s.label++, {
                                    value: i[1],
                                    done: !1
                                };
                            case 5:
                                s.label++, n = i[1], i = [0];
                                continue;
                            case 7:
                                i = s.ops.pop(), s.trys.pop();
                                continue;
                            default:
                                if (!(o = (o = s.trys).length > 0 && o[o.length - 1]) && (6 === i[0] || 2 === i[0])) {
                                    s = 0;
                                    continue
                                }
                                if (3 === i[0] && (!o || i[1] > o[0] && i[1] < o[3])) {
                                    s.label = i[1];
                                    break
                                }
                                if (6 === i[0] && s.label < o[1]) {
                                    s.label = o[1], o = i;
                                    break
                                }
                                if (o && s.label < o[2]) {
                                    s.label = o[2], s.ops.push(i);
                                    break
                                }
                                o[2] && s.ops.pop(), s.trys.pop();
                                continue
                        }
                        i = r.call(e, s)
                    } catch (e) {
                        i = [6, e], n = 0
                    } finally {
                        t = o = 0
                    }
                    if (5 & i[0]) throw i[1];
                    return {
                        value: i[0] ? i[1] : void 0,
                        done: !0
                    }
                }([i, a])
            }
        }
    },
    __read = this && this.__read || function(e, r) {
        var t = "function" == typeof Symbol && e[Symbol.iterator];
        if (!t) return e;
        var n, o, i = t.call(e),
            s = [];
        try {
            for (;
                (void 0 === r || r-- > 0) && !(n = i.next()).done;) s.push(n.value)
        } catch (e) {
            o = {
                error: e
            }
        } finally {
            try {
                n && !n.done && (t = i.return) && t.call(i)
            } finally {
                if (o) throw o.error
            }
        }
        return s
    },
    __spread = this && this.__spread || function() {
        for (var e = [], r = 0; r < arguments.length; r++) e = e.concat(__read(arguments[r]));
        return e
    },
    __values = this && this.__values || function(e) {
        var r = "function" == typeof Symbol && Symbol.iterator,
            t = r && e[r],
            n = 0;
        if (t) return t.call(e);
        if (e && "number" == typeof e.length) return {
            next: function() {
                return e && n >= e.length && (e = void 0), {
                    value: e && e[n++],
                    done: !e
                }
            }
        };
        throw new TypeError(r ? "Object is not iterable." : "Symbol.iterator is not defined.")
    };
import {
    keyBy
} from "lodash-es";
import {
    getKeysets
} from "../api/keyset";
import * as model from "../model";
import {
    extractDerivationInfo
} from "../model/symmetric_key";
import {
    makePromise as mp
} from "../util/make_promise";
import {
    getAccountOverview
} from "./account_overview";
import {
    getContextCache
} from "./context_cache";
var codeLocation = "action/keyset",
    makePromise = mp(codeLocation);
export var saveDecryptedKeysets = function(e, r) {
    var t = keyBy(r, "uuid");
    getContextCache(e, "keysets").saveEntries(t)
};
export var decryptKeysets = function(e, r) {
    return makePromise("decryptKeysets", function() {
        var t, n, o = e.user && e.user.masterKey,
            i = keyBy(r, function(e) {
                return e.uuid
            }),
            s = getContextCache(e, "keysets"),
            a = Promise.resolve([]),
            u = function(r) {
                a = a.then(function(t) {
                    return getDecryptedKeyset(r.uuid, i, s, o).then(function(n) {
                        return e.user && "mp" === r.encryptedBy && (e.user.activeKeyset = n, e.user.pubKey = n.ekeyPair.pubKey), __spread(t, [n])
                    })
                })
            };
        try {
            for (var c = __values(r), y = c.next(); !y.done; y = c.next()) {
                u(y.value)
            }
        } catch (e) {
            t = {
                error: e
            }
        } finally {
            try {
                y && !y.done && (n = c.return) && n.call(c)
            } finally {
                if (t) throw t.error
            }
        }
        return a
    })
};
export var findDecryptedKeyset = function(e, r) {
    return getContextCache(e, "keysets").getEntry(r)
};
var getDecryptedKeyset = function(e, r, t, n, o) {
        return void 0 === o && (o = 0), makePromise("getDecryptedKeyset", function() {
            if (o > 50) throw new Error("Infinite loop!");
            var i = t.getEntry(e);
            if (i) return i;
            var s = r[e];
            if (s) return decryptKeysetFindParent(s, r, t, n, o + 1).then(function(e) {
                return t.saveEntry(e.uuid, e), e
            });
            throw new Error("Could not find keyset. <" + e + ">")
        })
    },
    decryptKeysetFindParent = function(e, r, t, n, o) {
        return void 0 === o && (o = 0), makePromise("decryptKeysetFindParent", function() {
            if ("mp" === e.encryptedBy) return n ? model.Keyset.decryptWithKey(n, e) : Promise.reject(new Error("Missing master key"));
            var i = e.encryptedBy || e.encSymKey.kid;
            if (!i) throw new Error("Missing encryptedBy.");
            if (i === e.uuid) throw new Error("Keyset is self-encrypted.");
            return getDecryptedKeyset(i, r, t, n, o).then(function(r) {
                return model.Keyset.decryptWithKeyset(r, e)
            })
        })
    };
export var refreshKeysetsIfNecessary = function(e) {
    return __awaiter(void 0, void 0, void 0, function() {
        var r, t;
        return __generator(this, function(n) {
            switch (n.label) {
                case 0:
                    return r = e.accountOverview, t = e, [4, getAccountOverview(e)];
                case 1:
                    return t.accountOverview = n.sent(), !r || e.accountOverview && e.accountOverview.keysetVersion !== r.keysetVersion ? [2, refreshKeysets(e)] : [2]
            }
        })
    })
};
export var refreshKeysets = function(e) {
    return makePromise("refreshKeysets", function() {
        return getKeysets(e.session).then(function(r) {
            var t = r.keysets;
            return function() {
                if (!e.user) return Promise.reject(new Error("Missing user."));
                if (e.user.masterKey) return Promise.resolve();
                var r = t.find(function(e) {
                        return e.encryptedBy === model.KID_MASTER_PASSWORD
                    }),
                    n = extractDerivationInfo(r.encSymKey);
                return e.user.deriveMasterKey(n)
            }().then(function() {
                return decryptKeysets(e, t)
            })
        })
    })
};